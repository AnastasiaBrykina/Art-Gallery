import { ChangeEvent } from "react";

import SearchIcon from "@shared/assets/icons/search.svg?react";
import styles from "./search.module.scss";

type SearchProps = {
  value: string;
  onChangeSearchValue: (e: ChangeEvent<HTMLInputElement>) => void;
  onClearSearchValue: (value: string) => void;
};

export function Search(props: SearchProps) {
  const { value, onChangeSearchValue, onClearSearchValue } = props;

  return (
    <section className={styles.searchLine}>
      <form>
        <div className={styles.searchContainer}>
          <SearchIcon />
        </div>
        <button
          type="button"
          className={
            value
              ? `${styles.clearButton} ${styles.block}`
              : `${styles.clearButton}`
          }
          onClick={() => onClearSearchValue("")}
        >
          x
        </button>
        <input
          id="input"
          value={value}
          onChange={onChangeSearchValue}
          type="search"
          placeholder="Paiting title"
        />
      </form>
    </section>
  );
}
