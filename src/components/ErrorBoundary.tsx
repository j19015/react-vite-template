import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";
import * as styles from "./ErrorBoundary.css";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className={styles.container}>
          <div className={styles.card}>
            <h1 className={styles.title}>Something went wrong</h1>
            <p className={styles.message}>
              We're sorry for the inconvenience. Please try refreshing the page.
            </p>
            {this.state.error && (
              <details className={styles.details}>
                <summary className={styles.summary}>Error details</summary>
                <pre className={styles.errorText}>{this.state.error.toString()}</pre>
              </details>
            )}
            <button onClick={() => window.location.reload()} className={styles.button}>
              Reload page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
