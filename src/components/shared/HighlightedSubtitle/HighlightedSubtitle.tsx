import styles from "./HighlightedSubtitle.module.scss";

interface HighlightedSubtitleProps {
  text: string;
}

export default function HighlightedSubtitle({
  text,
}: HighlightedSubtitleProps) {
  return <p className={styles.text}>{text}</p>;
}
