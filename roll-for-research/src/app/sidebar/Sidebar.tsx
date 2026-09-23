
import { Button } from "../../components/Button/Button";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoMark}>R</span>

          <div>
            <div className={styles.title}>Roll for Research</div>
            <div className={styles.subtitle}>Research Workspace</div>
          </div>
        </div>
      </div>

      <nav className={styles.navigation} aria-label="Main navigation">
        <Button variant="ghost" className={styles.navigationItem}>
          Workspace
        </Button>

        <Button variant="ghost" className={styles.navigationItem}>
          Collections
        </Button>

        <Button variant="ghost" className={styles.navigationItem}>
          Documents
        </Button>
      </nav>

      <div className={styles.footer}>
        <Button variant="ghost" className={styles.navigationItem}>
          Settings
        </Button>
      </div>
    </aside>
  );
}