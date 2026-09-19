import type { AnimatedElementProps } from "../../../../types";

import AnimatedElement from "../../AnimatedElement";

import styles from "./FadeInDownElement.module.scss";

export default function FadeInDownElement({
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
