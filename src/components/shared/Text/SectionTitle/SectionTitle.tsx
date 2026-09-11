import styles from "./SectionTitle.module.scss";

interface SectionTitleProps {
  title: string;
  className?: string;
}
export default function SectionTitle({
  title,
  className = "",
}: SectionTitleProps) {
  return <h2 className={`${styles.title} ${className}`}>{title}</h2>;
}
