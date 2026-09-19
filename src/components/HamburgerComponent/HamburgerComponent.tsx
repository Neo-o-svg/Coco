import { useState } from "react";
import Hamburger from "hamburger-react";

import Logo from "../shared/Logo/Logo";
import HeaderActions from "../shared/HeaderActions/HeaderActions";

import FadeInUpElement from "../templates/animationElements/FadeInUpElement/FadeInUpElement";
import LeftToRightElement from "../templates/animationElements/LeftToRightElement/LeftToRightElement";

import styles from "./HamburgerComponent.module.scss";

export default function HamburgerComponent() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.hamburgerButton}>
      <LeftToRightElement distance="60">
        <Hamburger toggled={open} toggle={setOpen} />
      </LeftToRightElement>
      {open && (
        <div className={`${styles.burgerMenu} ${open ? styles.open : ""}`}>
          <header className={styles.burgerMenuHeader}>
            <Logo />
            <Hamburger toggled={open} toggle={setOpen} />
          </header>
          <FadeInUpElement>
            <main className={styles.burgerMenuMain}>
              <HeaderActions />
            </main>
          </FadeInUpElement>
        </div>
      )}
    </div>
  );
}
