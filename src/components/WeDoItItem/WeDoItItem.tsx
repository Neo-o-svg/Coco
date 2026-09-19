import LeftToRightElement from "../templates/animationElements/LeftToRightElement/LeftToRightElement";
import RightToLeftElement from "../templates/animationElements/RightToLeftElement/RightToLeftElement";

import styles from "./WeDoItItem.module.scss";

interface WeDoItItemProps {
  image: string;
  title: string;
  text: string;
  index: number;
}

export default function WeDoItItem({
  image,
  title,
  text,
  index,
}: WeDoItItemProps) {
  const baseDelay = 1;
  const step = 0.4;

  const delay = (baseDelay + index * step).toString();

  const AnimationWrapper =
    index % 2 != 0 ? LeftToRightElement : RightToLeftElement;

  return (
    <AnimationWrapper delay={delay}>
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
