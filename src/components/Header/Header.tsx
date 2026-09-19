import useInView from "../../hooks/useInView";

import Container from "../templates/Container/Container";
import HeaderActions from "../shared/HeaderActions/HeaderActions";
import HamburgerComponent from "../HamburgerComponent/HamburgerComponent";

import Logo from "../shared/Logo/Logo";

import FadeInUpElement from "../templates/animationElements/FadeInUpElement/FadeInUpElement";
import LeftToRightElement from "../templates/animationElements/LeftToRightElement/LeftToRightElement";

import styles from "./Header.module.scss";

export default function Header() {
  const { ref, isInView } = useInView();

  return (
    <header ref={ref} className={styles.header} data-in-view={isInView}>
      <Container>
        <div className={styles.headerInner}>
          <FadeInUpElement distance="40">
            <Logo />
          </FadeInUpElement>

          <LeftToRightElement distance="60">
            <div className={styles.actions}>
              <HeaderActions />
            </div>
          </LeftToRightElement>
          <HamburgerComponent />
        </div>
      </Container>
    </header>
  );
}
