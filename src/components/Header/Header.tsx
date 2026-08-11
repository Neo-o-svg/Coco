import Container from "../Container/Container";

import styles from "./Header.module.scss";

import Logo from "../../assets/icons/logo.svg";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          <a className={styles.logo} href="/">
            <img
              src={Logo}
              alt="Coca logo"
              width="140"
              height="66"
              loading="eager"
              fetchPriority="high"
            />
          </a>

          <div className={styles.actions}>
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
          </div>
        </div>
      </Container>
    </header>
  );
}
