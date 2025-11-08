import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import * as styles from "./AnimationExample.css";

export default function AnimationExample() {
  const [showBox, setShowBox] = useState(true);
  const [items, setItems] = useState([1, 2, 3]);

  const addItem = () => {
    setItems([...items, items.length + 1]);
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item !== id));
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Framer Motion Animations</h3>

      <div className={styles.grid}>
        {/* Fade In/Out */}
        <div className={styles.demo}>
          <h4 className={styles.demoTitle}>Fade In/Out</h4>
          <button onClick={() => setShowBox(!showBox)} className={styles.button}>
            Toggle
          </button>
          <AnimatePresence>
            {showBox && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={styles.box}
              >
                Fade Box
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Scale Animation */}
        <div className={styles.demo}>
          <h4 className={styles.demoTitle}>Scale & Rotate</h4>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className={styles.box}
          >
            Hover or Click
          </motion.div>
        </div>

        {/* Drag */}
        <div className={styles.demo}>
          <h4 className={styles.demoTitle}>Draggable</h4>
          <motion.div
            drag
            dragConstraints={{ left: 0, right: 200, top: 0, bottom: 100 }}
            className={styles.box}
          >
            Drag Me
          </motion.div>
        </div>

        {/* List Animation */}
        <div className={styles.demoFull}>
          <h4 className={styles.demoTitle}>Stagger Children</h4>
          <div className={styles.buttonGroup}>
            <button onClick={addItem} className={styles.button}>
              Add Item
            </button>
          </div>
          <motion.ul className={styles.list} layout>
            <AnimatePresence>
              {items.map((item) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  layout
                  className={styles.listItem}
                  onClick={() => removeItem(item)}
                >
                  Item {item} (click to remove)
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </div>
      </div>
    </div>
  );
}
