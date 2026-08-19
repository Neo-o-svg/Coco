import styles from "./SectionHeader.module.scss";

interface SectionHeaderProps {
  title: string;
  text: string;
  className: string;
}

export default function SectionHeader({
  title,
  text,
  className,
}: SectionHeaderProps) {
  return (
    <div className={`${styles.sectionHeader} ${className}`}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
