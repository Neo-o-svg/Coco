import type { FooterListItem } from "../../../types";

import styles from "./FooterList.module.scss";

export default function FooterList({ type, items }: FooterListItem) {
  return (
    <div className={styles.column}>
      <p className={styles.type}>{type}</p>
      <ul className={styles.list}>
        {items.map((sectionTitle, ind) => (
          <li key={ind} className={styles.item}>
            {sectionTitle}
          </li>
        ))}
      </ul>
    </div>
  );
}
