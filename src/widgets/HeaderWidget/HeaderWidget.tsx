import { ChangeThemeButton } from "@features/change-theme";
import Logo from "@shared/assets/icons/logo.svg?react";

import styles from "./header.module.scss";

export function HeaderWidget() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo className={styles.logo} />
        <ChangeThemeButton />
      </div>
    </header>
  );
}
