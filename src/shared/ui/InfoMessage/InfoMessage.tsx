import styles from "./infoMessage.module.scss";

type Props = {
  text: string;
};

export function InfoMessage(props: Props) {
  const { text } = props;

  return (
    <section className={styles.info}>
      <p className={styles.valueContainer}>
        No matches for <span className={styles.value}>{text}</span>
      </p>
      <p className={styles.gray}>
        Please try again with a defferent spelling or keywords.
      </p>
    </section>
  );
}
