import type { BackgroundDecorProps } from "../../../types";

import styles from "./BackgroundDecor.module.scss";

export default function BackgroundDecor({
  src,
  style,
  className,
}: BackgroundDecorProps) {
  return (
    <div
      className={`${styles.decor} ${className ?? ""}`}
      style={{
        backgroundImage: `url(${src})`,
        ...style,
      }}
    />
  );
}
