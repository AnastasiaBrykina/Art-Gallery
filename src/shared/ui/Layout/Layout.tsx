import { ReactNode } from "react";

import { Outlet } from "react-router-dom";
import styles from "./layout.module.scss";

type LayoutProps = {
  headerSlot: ReactNode;
};

export function Layout(props: LayoutProps) {
  const { headerSlot } = props;

  return (
    <div className={styles.layoutContainer}>
      {headerSlot}
      <Outlet />
    </div>
  );
}
