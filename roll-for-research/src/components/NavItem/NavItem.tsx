import type { AnchorHTMLAttributes, ReactNode } from "react";

import styles from "./NavItem.module.css";

interface NavItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  icon?: ReactNode;
}

export function NavItem({
  active = false,
  icon,
  children,
  className,
  ...props
}: NavItemProps) {
  const classes = [
    styles.navItem,
    active && styles.active,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      className={classes}
      aria-current={active ? "page" : undefined}
      {...props}
    >
    {icon && <span className={styles.icon}>{icon}</span>}

      <span>{children}</span>
    </a>
  );
}