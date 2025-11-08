import * as Dialog from "@radix-ui/react-dialog";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Tooltip from "@radix-ui/react-tooltip";
import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";
import { clsx } from "clsx";
import * as styles from "./RadixExample.css";

export default function RadixExample() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Radix UI Components + clsx</h3>
      <div className={styles.grid}>
        {/* Dialog Example */}
        <div className={styles.card}>
          <h4 className={styles.cardTitle}>Dialog</h4>
          <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
            <Dialog.Trigger asChild>
              <button className={styles.button}>Open Dialog</button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className={styles.dialogOverlay} />
              <Dialog.Content className={styles.dialogContent}>
                <Dialog.Title className={styles.dialogTitle}>Welcome to Radix UI</Dialog.Title>
                <Dialog.Description className={styles.dialogDescription}>
                  This is a fully accessible dialog component built with Radix UI primitives.
                </Dialog.Description>
                <div className={styles.dialogButtons}>
                  <Dialog.Close asChild>
                    <button className={clsx(styles.button, styles.buttonSecondary)}>Cancel</button>
                  </Dialog.Close>
                  <Dialog.Close asChild>
                    <button className={styles.button}>Confirm</button>
                  </Dialog.Close>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>

        {/* Dropdown Menu Example */}
        <div className={styles.card}>
          <h4 className={styles.cardTitle}>Dropdown Menu</h4>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className={styles.button}>Open Menu</button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content className={styles.dropdownContent}>
                <DropdownMenu.Item className={styles.dropdownItem}>Profile</DropdownMenu.Item>
                <DropdownMenu.Item className={styles.dropdownItem}>Settings</DropdownMenu.Item>
                <DropdownMenu.Separator className={styles.dropdownSeparator} />
                <DropdownMenu.Item className={styles.dropdownItem}>Logout</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>

        {/* Tooltip Example */}
        <div className={styles.card}>
          <h4 className={styles.cardTitle}>Tooltip</h4>
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button className={styles.button}>Hover me</button>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content className={styles.tooltipContent}>
                  This is a tooltip!
                  <Tooltip.Arrow className={styles.tooltipArrow} />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>

        {/* Tabs Example */}
        <div className={styles.cardFull}>
          <h4 className={styles.cardTitle}>Tabs</h4>
          <Tabs.Root defaultValue="tab1" className={styles.tabsRoot}>
            <Tabs.List className={styles.tabsList}>
              <Tabs.Trigger value="tab1" className={styles.tabsTrigger}>
                Account
              </Tabs.Trigger>
              <Tabs.Trigger value="tab2" className={styles.tabsTrigger}>
                Password
              </Tabs.Trigger>
              <Tabs.Trigger value="tab3" className={styles.tabsTrigger}>
                Preferences
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="tab1" className={styles.tabsContent}>
              <p>Manage your account settings here.</p>
            </Tabs.Content>
            <Tabs.Content value="tab2" className={styles.tabsContent}>
              <p>Change your password and security settings.</p>
            </Tabs.Content>
            <Tabs.Content value="tab3" className={styles.tabsContent}>
              <p>Customize your experience preferences.</p>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </div>
  );
}
