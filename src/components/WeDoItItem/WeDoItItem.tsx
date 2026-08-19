import styles from "./WeDoItItem.module.scss";

interface WeDoItItemProps {
  image: string;
  title: string;
  text: string;
}

export default function WeDoItItem({ image, title, text }: WeDoItItemProps) {
  return (
    <li className={styles.item}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} width="240" height="273" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
    </li>
  );
}
