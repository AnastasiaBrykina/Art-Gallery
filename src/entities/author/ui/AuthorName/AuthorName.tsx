import { useAuthorsQuery } from "../../api/authorApi";
import styles from "./authorName.module.scss";

type AuthorNameProps = {
  authorId: number;
};

export function AuthorName(props: AuthorNameProps) {
  const { authorId } = props;

  const { data: authors = [] } = useAuthorsQuery();

  const author = authors.find((authorItem) => authorItem.id === authorId);

  if (!author) return null;

  return <p className={styles.author}>{author.name}</p>;
}
