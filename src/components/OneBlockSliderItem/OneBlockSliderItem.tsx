import styles from "./OneBlockSliderItem.module.scss";

interface OneBlockItemProps {
  rate: string;
  comment: string;
  photo: string;
  name: string;
  position: string;
  isActive: boolean;
}

export default function OneBlockSliderItem({
  rate,
  comment,
  photo,
  name,
  position,
  isActive,
}: OneBlockItemProps) {
  return (
    <div className={`${styles.slide} ${isActive ? styles.active : ""}`}>
      <span className={styles.rate}>{rate}</span>
      <p className={styles.comment}>{comment}</p>
      <div className={styles.userComment}>
        <img
          className={styles.userPhoto}
          src={photo}
          alt={name}
          width="56"
          height="56"
          loading="lazy"
        />
        <div className={styles.userInfo}>
          <p className={styles.name}>{name}</p>
          <span className={styles.position}>{position}</span>
        </div>
      </div>
    </div>
  );
}
