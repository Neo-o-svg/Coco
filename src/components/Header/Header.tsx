import useInView from "../../hooks/useInView";

import Container from "../templates/Container/Container";

import Logo from "../shared/Logo/Logo";

import FadeInUpElement from "../templates/animationElements/FadeInUpElement/FadeInUpElement";
import LeftToRightElement from "../templates/animationElements/LeftToRightElement/LeftToRightElement";

import styles from "./Header.module.scss";

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
            <Logo />
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
