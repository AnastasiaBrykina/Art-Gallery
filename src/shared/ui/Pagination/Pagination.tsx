import { ChangeEvent } from "react";
import { Pagination as MuiPagination, PaginationItem } from "@mui/material";

import ArrowRightIcon from "@shared/assets/icons/arrow_icon.svg?react";
import ArrowLeftIcon from "@shared/assets/icons/arrow-left.svg?react";

import styles from "./pagination.module.scss";

type PaginationProps = {
  count: number;
  page: number;
  onChange: (e: ChangeEvent<unknown>, currentPage: number) => void;
};

export function Pagination(props: PaginationProps) {
  const { count, page, onChange } = props;

  if (count <= 1) return null;

  return (
    <MuiPagination
      className={styles.pagination}
      count={count}
      page={page}
      onChange={onChange}
      shape="rounded"
      renderItem={(item) => (
        <PaginationItem
          className={styles.paginationItem}
          slots={{ previous: ArrowLeftIcon, next: ArrowRightIcon }}
          {...item}
        />
      )}
    />
  );
}
