import LeftToRightElement from "../animationElements/LeftToRightElement/LeftToRightElement";
import RightToLeftElement from "../animationElements/RightToLeftElement/RightToLeftElement";

import styles from "./WeDoItItem.module.scss";

interface WeDoItItemProps {
  image: string;
  title: string;
  text: string;
  index: number;
  isInView: boolean;
}

export default function WeDoItItem({
  image,
  title,
  text,
  index,
  isInView,
}: WeDoItItemProps) {
  const baseDelay = 1;
  const step = 0.4;

  const delay = (baseDelay + index * step).toString();

  const AnimationWrapper =
    index % 2 != 0 ? LeftToRightElement : RightToLeftElement;

  return (
    <AnimationWrapper delay={delay} isInView={isInView}>
      <li className={styles.item}>
        <div className={styles.imageWrapper}>
          <img src={image} alt={title} width="240" height="273" />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.text}>{text}</p>
        </div>
      </li>
    </AnimationWrapper>
  );
}
