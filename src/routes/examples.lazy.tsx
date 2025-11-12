import { createLazyFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import FormExample from "@/components/examples/FormExample";
import RadixExample from "@/components/examples/RadixExample";
import AnimationExample from "@/components/examples/AnimationExample";
import IconsExample from "@/components/examples/IconsExample";
import ZustandExample from "@/components/examples/ZustandExample";
import TanStackQueryExample from "@/components/examples/TanStackQueryExample";
import AutoAnimateExample from "@/components/examples/AutoAnimateExample";
import PatternMatchingExample from "@/components/examples/PatternMatchingExample";
import DateExample from "@/components/examples/DateExample";
import I18nextExample from "@/components/examples/I18nextExample";
import ImmerExample from "@/components/examples/ImmerExample";
import EmotionExample from "@/components/examples/EmotionExample";
import UtilityLibrariesExample from "@/components/examples/UtilityLibrariesExample";
import VanillaExtractExample from "@/components/examples/VanillaExtractExample";
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
          <h2 className={styles.sectionTitle}>📊 State Management</h2>
          <ZustandExample />
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>🔍 Data Fetching - TanStack Query</h2>
          <TanStackQueryExample />
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>📝 Form Management - React Hook Form + Zod</h2>
          <FormExample />
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>🎨 UI Components - Radix UI</h2>
          <RadixExample />
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>✨ Animations - Framer Motion</h2>
          <AnimationExample />
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>🎬 Auto-Animate</h2>
          <AutoAnimateExample />
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>🎭 CSS-in-JS - Emotion</h2>
          <EmotionExample />
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>🎨 CSS-in-TypeScript - vanilla-extract</h2>
          <VanillaExtractExample />
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>🌍 Internationalization - i18next</h2>
          <I18nextExample />
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>🔒 Immutable Updates - Immer</h2>
          <ImmerExample />
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>🔧 Pattern Matching - ts-pattern</h2>
          <PatternMatchingExample />
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>📅 Date Utilities - date-fns</h2>
          <DateExample />
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>🔨 Utility Libraries</h2>
          <UtilityLibrariesExample />
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>🎯 Icons - Lucide React</h2>
          <IconsExample />
        </div>
      </div>
    </Suspense>
  );
}
