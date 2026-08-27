import styles from "./HighlightedSubtitle.module.scss";

interface HighlightedSubtitleProps {
  text: string;
  style?: React.CSSProperties;
}

export default function HighlightedSubtitle({
  text,
  style,
}: HighlightedSubtitleProps) {
  return (
    <p className={styles.text} style={style}>
      {text}
    </p>
  );
}
