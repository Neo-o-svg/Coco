import styles from "./SectionSubtitle.module.scss";

interface SectionSubtitleProps {
  text: string;
  style?: React.CSSProperties;
}

export default function SectionSubtitle({ text, style }: SectionSubtitleProps) {
  return (
    <p className={styles.text} style={style}>
      {text}
    </p>
  );
}
