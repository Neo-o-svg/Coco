import styles from "./HeaderActions.module.scss";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
];

export default function HeaderActions() {
  return (
    <>
      <nav className={styles.navigation} aria-label="Main navigation">
        <ul>
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href} className={styles.navItem}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <a href="/contact" className={styles.goToArrow}>
        Contact Us{" "}
      </a>
    </>
  );
}
