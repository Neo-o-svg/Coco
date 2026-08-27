import type { BackgroundDecorProps } from "../../../types";

import styles from "./BackgroundDecor.module.scss";

export default function BackgroundDecor({
  src,
  width,
  height,
  top,
  left,
  right,
  bottom,
}: BackgroundDecorProps) {
  return (
    <div
      className={styles.decor}
      style={{
        top,
        left,
        right,
        bottom,
        width,
        height,
        backgroundImage: `url(${src})`,
      }}
    />
  );
}
