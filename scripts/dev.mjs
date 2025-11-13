import { spawn } from "node:child_process";

const processes = [];
let shuttingDown = false;

const shutdown = (code = 0) => {
  if (shuttingDown) {
    return;
  }

  shuttingDown = true;

  for (const child of processes) {
    if (!child.killed) {
      child.kill("SIGTERM");
    }
  }

  setTimeout(() => {
    process.exit(code);
  }, 100);
};

const run = (command, args) => {
  const child = spawn(command, args, {
    stdio: "inherit",
    shell: process.platform === "win32",
  });

  processes.push(child);

  child.on("exit", (code, signal) => {
    if (shuttingDown) {
      return;
    }

    if (signal) {
      console.warn(`Process ${command} ${args.join(" ")} terminated with signal ${signal}.`);
      shutdown(1);
      return;
    }

    if (code !== 0 && code !== null) {
      console.error(`Process ${command} ${args.join(" ")} exited with code ${code}.`);
      shutdown(code);
      return;
    }

    // If one of the processes exits normally, shut everything down gracefully.
    shutdown(code ?? 0);
  });

  child.on("error", (error) => {
    if (!shuttingDown) {
      console.error(`Failed to start ${command} ${args.join(" ")}:`, error);
      shutdown(1);
    }
  });

  return child;
};

process.on("SIGINT", () => shutdown(0));
process.on("SIGTERM", () => shutdown(0));

run("pnpm", ["run", "routes:watch"]);
run("pnpm", ["run", "dev:vite"]);

await new Promise(() => {});
