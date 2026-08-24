import type { AnimatedElementProps } from "../../../types";

import AnimatedElement from "../../templates/AnimatedElement";

import styles from "./FadeInUpElement.module.scss";

export default function FadeInUpElement({
  children,
  duration,
  delay,
  distance,
  isInView,
}: AnimatedElementProps & { isInView?: boolean }) {
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
