import styles from "./StatisticItem.module.scss";

interface ItemProps {
  title: string;
  text: string;
}

export default function StatisticItem({ title, text }: ItemProps) {
  return (
    <li className={styles.item}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
    </li>
  );
}
