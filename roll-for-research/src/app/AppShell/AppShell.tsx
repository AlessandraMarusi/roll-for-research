import type { ReactNode } from "react";


import styles from "./AppShell.module.css";
import { Sidebar } from "../Sidebar/Sidebar";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className={styles.shell}>
      <Sidebar />

      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}