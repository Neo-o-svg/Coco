import type { AnimatedElementProps } from "../../../types";

import AnimatedElement from "../../templates/AnimatedElement";

import styles from "./FadeInDownElement.module.scss";

export default function FadeInDownElement({
  children,
  duration,
  delay,
  distance,
  isInView,
}: AnimatedElementProps & { isInView: boolean }) {
  return (
    <AnimatedElement
      children={children}
      duration={duration}
      delay={delay}
      distance={distance}
      className={`${styles.animatedElement} ${isInView ? styles.animate : ""}`}
    />
  );
}
