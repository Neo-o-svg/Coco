import styles from "./TryItForFreeButton.module.scss";

export default function TryItForFreeButton() {
  return (
    <button
      className={styles.tryButton}
      type="button"
      aria-label="Try it for free"
    >
      Try for free
    </button>
  );
}
