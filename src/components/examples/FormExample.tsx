import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import * as styles from "./FormExample.css";

const userSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  age: z.number().min(18, "Must be at least 18 years old"),
  bio: z.string().max(200, "Bio must be less than 200 characters").optional(),
});

type UserFormData = z.infer<typeof userSchema>;

export default function FormExample() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<UserFormData>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(userSchema as any),
  });

  const onSubmit = async (data: UserFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    alert(`Form submitted! Check console for data.`);
    reset();
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>React Hook Form + Zod Validation</h3>
      <form
        onSubmit={(e) => {
          void handleSubmit(onSubmit)(e);
        }}
        className={styles.form}
      >
        <div className={styles.field}>
          <label htmlFor="username" className={styles.label}>
            Username
          </label>
          <input
            id="username"
            {...register("username")}
            className={styles.input}
            placeholder="Enter username"
          />
          {errors.username && <p className={styles.error}>{errors.username.message}</p>}
        </div>

        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={styles.input}
            placeholder="Enter email"
          />
          {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        </div>

        <div className={styles.field}>
          <label htmlFor="age" className={styles.label}>
            Age
          </label>
          <input
            id="age"
            type="number"
            {...register("age", { valueAsNumber: true })}
            className={styles.input}
            placeholder="Enter age"
          />
          {errors.age && <p className={styles.error}>{errors.age.message}</p>}
        </div>

        <div className={styles.field}>
          <label htmlFor="bio" className={styles.label}>
            Bio (optional)
          </label>
          <textarea
            id="bio"
            {...register("bio")}
            className={styles.textarea}
            placeholder="Tell us about yourself"
            rows={4}
          />
          {errors.bio && <p className={styles.error}>{errors.bio.message}</p>}
        </div>

        <button type="submit" disabled={isSubmitting} className={styles.button}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
