import styles from "./TwoBlockSliderItem.module.scss";

interface TwoBlockItemProps {
  date: string;
  author: string;
  title: string;
  image: string;
  isActive: boolean;
}

export default function TwoBlockSliderItem({
  date,
  author,
  title,
  image,
  isActive,
}: TwoBlockItemProps) {
  return (
    <div className={`${styles.slide} ${isActive ? styles.active : ""}`}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} width="582" height="332" />
      </div>
      <div className={styles.content}>
        <div className={styles.publishedData}>
          <span className={styles.date}>Published in Insight {date}</span>
          <span className={styles.author}>by : {author}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </div>
  );
}
