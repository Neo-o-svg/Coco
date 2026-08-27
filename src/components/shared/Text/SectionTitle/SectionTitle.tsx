import styles from "./SectionTitle.module.scss";

interface SectionTitleProps {
  title: string;
  style?: React.CSSProperties;
}
export default function SectionTitle({ title, style }: SectionTitleProps) {
  return (
    <h2 className={styles.title} style={style}>
      {title}
    </h2>
  );
}
