import styles from "./oneSlideArrows.module.scss";

import PrevArrow from "../../../../assets/icons/oneSlidePrevArrow.svg";
import NextArrow from "../../../../assets/icons/oneSlideNextArrow.svg";

interface ArrowsProps {
  onLeftClick: () => void;
  onRightClick: () => void;
}

export default function OneSlideArrows({
  onLeftClick,
  onRightClick,
}: ArrowsProps) {
  return (
    <div className={styles.arrowsWrapper}>
      <button
        type="button"
        className={styles.prevArrow}
        onClick={onLeftClick}
        aria-label="Previous"
      >
        <img src={PrevArrow} alt="" width="18" height="18" />
      </button>
      <button
        type="button"
        className={styles.nextArrow}
        onClick={onRightClick}
        aria-label="Next"
      >
        <img src={NextArrow} alt="" width="18" height="18" />
      </button>
    </div>
  );
}
