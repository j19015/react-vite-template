import { createLazyFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import FormExample from "@/components/examples/FormExample";
import RadixExample from "@/components/examples/RadixExample";
import AnimationExample from "@/components/examples/AnimationExample";
import IconsExample from "@/components/examples/IconsExample";
import JotaiExample from "@/components/examples/JotaiExample";
import AutoAnimateExample from "@/components/examples/AutoAnimateExample";
import PatternMatchingExample from "@/components/examples/PatternMatchingExample";
import DateExample from "@/components/examples/DateExample";
import * as styles from "./examples.css";

export const Route = createLazyFileRoute("/examples")({
  component: ExamplesPage,
});

function ExamplesPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className={styles.container}>
        <h1 className={styles.title}>Library Examples</h1>
        <p className={styles.subtitle}>Comprehensive examples of all integrated libraries</p>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Form Management</h2>
          <FormExample />
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Radix UI Components</h2>
          <RadixExample />
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Framer Motion Animations</h2>
          <AnimationExample />
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Lucide React Icons</h2>
          <IconsExample />
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Jotai State Management</h2>
          <JotaiExample />
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Auto-Animate</h2>
          <AutoAnimateExample />
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Pattern Matching (ts-pattern)</h2>
          <PatternMatchingExample />
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Date Formatting (date-fns)</h2>
          <DateExample />
        </div>
      </div>
    </Suspense>
  );
}
