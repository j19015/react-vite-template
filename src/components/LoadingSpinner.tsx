import * as styles from "./LoadingSpinner.css";

export default function LoadingSpinner() {
  return (
    <div className={styles.container}>
      <div className={styles.spinner} />
    </div>
  );
}
