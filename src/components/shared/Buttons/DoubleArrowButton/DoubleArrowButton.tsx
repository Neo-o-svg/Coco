import styles from "./DoubleArrowButton.module.scss";

import arrowsImage from "../../../../assets/icons/arrowsImage.png";

interface DoubleArrowButtonProps {
  onLeftClick: () => void;
  onRightClick: () => void;
}

export default function DoubleArrowButton({
  onLeftClick,
  onRightClick,
}: DoubleArrowButtonProps) {
  return (
    <div className={styles.arrowsWrapper}>
      <img
        className={styles.arrowsImg}
        src={arrowsImage}
        alt="Arrows"
        width="40"
        height="40"
      />
      <button
        className={`${styles.hitZone} ${styles.hitLeft}`}
        type="button"
        onClick={onLeftClick}
        aria-label="left"
      />
      <button
        className={`${styles.hitZone} ${styles.hitRight}`}
        type="button"
        onClick={onRightClick}
        aria-label="right"
      />
    </div>
  );
}
