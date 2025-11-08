import {
  format,
  formatDistance,
  formatRelative,
  addDays,
  subDays,
  startOfWeek,
  endOfWeek,
  isAfter,
  isBefore,
  differenceInDays,
} from "date-fns";
import { useState } from "react";
import * as styles from "./DateExample.css";

export default function DateExample() {
  const now = new Date();
  const [selectedDate, setSelectedDate] = useState(now);

  const formatExamples = [
    { label: "Default", value: format(now, "PPP") },
    { label: "Short", value: format(now, "PP") },
    { label: "Time", value: format(now, "p") },
    { label: "Full", value: format(now, "PPPPpppp") },
    { label: "Custom", value: format(now, "yyyy-MM-dd HH:mm:ss") },
    { label: "ISO", value: format(now, "yyyy-MM-dd'T'HH:mm:ss") },
  ];

  const relativeExamples = [
    { label: "7 days ago", value: formatRelative(subDays(now, 7), now) },
    { label: "Yesterday", value: formatRelative(subDays(now, 1), now) },
    { label: "Tomorrow", value: formatRelative(addDays(now, 1), now) },
    { label: "7 days from now", value: formatRelative(addDays(now, 7), now) },
  ];

  const distanceExamples = [
    {
      label: "From 30 days ago",
      value: formatDistance(subDays(now, 30), now, { addSuffix: true }),
    },
    {
      label: "From 7 days ago",
      value: formatDistance(subDays(now, 7), now, { addSuffix: true }),
    },
    {
      label: "To 14 days",
      value: formatDistance(now, addDays(now, 14), { addSuffix: true }),
    },
  ];

  const weekStart = startOfWeek(now);
  const weekEnd = endOfWeek(now);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Date Formatting with date-fns</h3>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h4 className={styles.cardTitle}>Format Examples</h4>
          <div className={styles.list}>
            {formatExamples.map(({ label, value }) => (
              <div key={label} className={styles.listItem}>
                <span className={styles.label}>{label}:</span>
                <span className={styles.value}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.card}>
          <h4 className={styles.cardTitle}>Relative Formatting</h4>
          <div className={styles.list}>
            {relativeExamples.map(({ label, value }) => (
              <div key={label} className={styles.listItem}>
                <span className={styles.label}>{label}:</span>
                <span className={styles.value}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.card}>
          <h4 className={styles.cardTitle}>Distance in Words</h4>
          <div className={styles.list}>
            {distanceExamples.map(({ label, value }) => (
              <div key={label} className={styles.listItem}>
                <span className={styles.label}>{label}:</span>
                <span className={styles.value}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.card}>
          <h4 className={styles.cardTitle}>Date Calculations</h4>
          <div className={styles.list}>
            <div className={styles.listItem}>
              <span className={styles.label}>Week Start:</span>
              <span className={styles.value}>{format(weekStart, "PPP")}</span>
            </div>
            <div className={styles.listItem}>
              <span className={styles.label}>Week End:</span>
              <span className={styles.value}>{format(weekEnd, "PPP")}</span>
            </div>
            <div className={styles.listItem}>
              <span className={styles.label}>+7 days:</span>
              <span className={styles.value}>{format(addDays(now, 7), "PPP")}</span>
            </div>
            <div className={styles.listItem}>
              <span className={styles.label}>-7 days:</span>
              <span className={styles.value}>{format(subDays(now, 7), "PPP")}</span>
            </div>
          </div>
        </div>

        <div className={styles.cardFull}>
          <h4 className={styles.cardTitle}>Date Comparison</h4>
          <div className={styles.comparisonBox}>
            <input
              type="date"
              value={format(selectedDate, "yyyy-MM-dd")}
              onChange={(e) => setSelectedDate(new Date(e.target.value))}
              className={styles.input}
            />
            <div className={styles.comparisonResults}>
              <div className={styles.comparisonItem}>
                <span className={styles.comparisonLabel}>Is after today:</span>
                <span
                  className={
                    isAfter(selectedDate, now) ? styles.comparisonTrue : styles.comparisonFalse
                  }
                >
                  {isAfter(selectedDate, now) ? "Yes" : "No"}
                </span>
              </div>
              <div className={styles.comparisonItem}>
                <span className={styles.comparisonLabel}>Is before today:</span>
                <span
                  className={
                    isBefore(selectedDate, now) ? styles.comparisonTrue : styles.comparisonFalse
                  }
                >
                  {isBefore(selectedDate, now) ? "Yes" : "No"}
                </span>
              </div>
              <div className={styles.comparisonItem}>
                <span className={styles.comparisonLabel}>Days from today:</span>
                <span className={styles.comparisonValue}>
                  {differenceInDays(selectedDate, now)} days
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
