import { ReactNode } from "react";
import { Paint } from "../../model/types";
import styles from "./painting.module.scss";

type Props = {
  painting: Paint;
  children?: ReactNode;
};

export function Painting(props: Props) {
  const { painting, children = null } = props;

  return (
    <div className={styles.paintingContainer}>
      <img
        className={styles.painting}
        alt={painting.name}
        src={`https://test-front.framework.team${painting.imageUrl}`}
      />
      <div className={styles.description}>
        <div className={styles.mainDescription}>
          <p className={styles.name}>{painting.name}</p>
          <p className={styles.date}>{painting.created}</p>
        </div>
        <div className={styles.extraDescription}>{children}</div>
      </div>
    </div>
  );
}
