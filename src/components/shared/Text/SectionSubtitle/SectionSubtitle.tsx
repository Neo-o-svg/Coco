import styles from "./SectionSubtitle.module.scss";

interface SectionSubtitleProps {
  text: string;
  className?: string;
}

export default function SectionSubtitle({
  text,
  className = "",
}: SectionSubtitleProps) {
  return <p className={`${styles.text} ${className}`}>{text}</p>;
}
