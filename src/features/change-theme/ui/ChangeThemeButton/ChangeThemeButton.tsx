import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@app/hooks";
import { changeTheme } from "@entities/theme";

import DarkThemeIcon from "@shared/assets/icons/dark_icon.svg?react";
import LightThemeIcon from "@shared/assets/icons/light_icon.svg?react";

import styles from "./themeButton.module.scss";

export function ChangeThemeButton() {
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.documentElement.dataset.theme = currentTheme;
  }, [currentTheme]);

  const onChangeTheme = () => {
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    dispatch(changeTheme(nextTheme));
  };

  return (
    <button
      type="button"
      aria-label="change theme"
      onClick={onChangeTheme}
      className={styles.themeButton}
    >
      {currentTheme === "dark" ? <LightThemeIcon /> : <DarkThemeIcon />}
    </button>
  );
}
