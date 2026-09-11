import styles from "./HighlightedSubtitle.module.scss";

interface HighlightedSubtitleProps {
  text: string;
  className?: string;
}

export default function HighlightedSubtitle({
  text,
  className = "",
}: HighlightedSubtitleProps) {
  return <p className={`${styles.text} ${className}`}>{text}</p>;
}
