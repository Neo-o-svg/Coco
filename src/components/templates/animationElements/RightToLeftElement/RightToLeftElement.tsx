import type { AnimatedElementProps } from "../../../../types";
import AnimatedElement from "../../AnimatedElement";

import styles from "./RightToLeftElement.module.scss";

export default function RightToLeftElement({
  children,
  duration,
  delay,
  distance,
}: AnimatedElementProps) {
  return (
    <AnimatedElement
      children={children}
      duration={duration}
      delay={delay}
      distance={distance}
      className={styles.animatedElement}
    />
  );
}
