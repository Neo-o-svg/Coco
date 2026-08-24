import Container from "../Container/Container";
import FadeInUpElement from "../animationElements/FadeInUpElement/FadeInUpElement";

import useInView from "../../hooks/useInView";

import styles from "./Header.module.scss";

import Logo from "../../assets/icons/logo.svg";
import LeftToRightElement from "../animationElements/LeftToRightElement/LeftToRightElement";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
];

export default function Header() {
  const { ref, isInView } = useInView();

  return (
    <header ref={ref} className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          <FadeInUpElement distance="40" isInView={isInView}>
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
          </FadeInUpElement>

          <LeftToRightElement distance="60" isInView={isInView}>
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
          </LeftToRightElement>
        </div>
      </Container>
    </header>
  );
}
