import { useState, ChangeEvent } from "react";

import { Painting, usePaintingsQuery } from "@entities/painting";
import { AuthorName } from "@entities/author";
import { LocationName } from "@entities/location";
import { Pagination, InfoMessage, Search } from "@shared/ui";

import styles from "./mainPage.module.scss";

const LIMIT = 6;

export function MainPage() {
  const [page, setPage] = useState<number>(1);
  const [value, setSearchValue] = useState<string>("");

  const { data: allPaintings = [] } = usePaintingsQuery({ value });
  const { data: paintings = [] } = usePaintingsQuery({
    value,
    page,
    limit: LIMIT,
  });

  const onChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setPage(1);
  };

  const onChangePage = (_e: ChangeEvent<unknown>, currentPage: number) =>
    setPage(currentPage);

  const paginationCount = Math.ceil(allPaintings.length / LIMIT);

  return (
    <main className={styles.container}>
      <Search
        value={value}
        onChangeSearchValue={onChangeSearchValue}
        onClearSearchValue={setSearchValue}
      />
      {value && paintings.length === 0 ? (
        <InfoMessage text={value} />
      ) : (
        <section className={styles.gallery}>
          {paintings.map((painting) => (
            <Painting key={painting.id} painting={painting}>
              <AuthorName authorId={painting.authorId} />
              <LocationName locationId={painting.locationId} />
            </Painting>
          ))}
        </section>
      )}

      <Pagination count={paginationCount} page={page} onChange={onChangePage} />
    </main>
  );
}
