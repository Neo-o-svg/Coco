import type { CSSProperties } from "react";

import { footerListData, thinkBeyondHeaderData } from "../../data";

import useInView from "../../hooks/useInView";

import Container from "../templates/Container/Container";
import FooterList from "../shared/FooterList/FooterList";
import HighlightedSubtitle from "../shared/Text/HighlightedSubtitle/HighlightedSubtitle";

import Logo from "../shared/Logo/Logo";
import SectionTitle from "../shared/Text/SectionTitle/SectionTitle";
import TryItForFreeButton from "../shared/Buttons/TryItForFreeButton/TryItForFreeButton";
import BackgroundDecor from "../shared/BackgroundDecor/BackgroundDecor";

import PinkEllipse from "../../assets/icons/EllipsePink.png";
import GreenEllipse from "../../assets/icons/EllipseGreen.png";

import RightToLeftElement from "../templates/animationElements/RightToLeftElement/RightToLeftElement";
import LeftToRightElement from "../templates/animationElements/LeftToRightElement/LeftToRightElement";
import FadeInUpElement from "../templates/animationElements/FadeInUpElement/FadeInUpElement";

import styles from "./Footer.module.scss";

export default function Footer() {
  const { ref, isInView } = useInView();

  return (
    <Container>
      <footer ref={ref} className={styles.footer}>
        <BackgroundDecor
          src={PinkEllipse}
          style={
            {
              "--decor-width": "62.1rem",
              "--decor-height": "62.1rem",
              "--decor-top": "-30%",
              "--decor-left": "0",
            } as CSSProperties
          }
          className={styles.pinkMobileDecor}
        />
        <BackgroundDecor
          src={GreenEllipse}
          style={
            {
              "--decor-width": "52.5rem",
              "--decor-height": "52.5rem",
              "--decor-right": "0%",
            } as CSSProperties
          }
          className={styles.greenMobileDecor}
        />

        <div className={styles.footerTop}>
          <div>
            <RightToLeftElement isInView={isInView}>
              <SectionTitle title={thinkBeyondHeaderData.title} />
              <HighlightedSubtitle
                text={thinkBeyondHeaderData.subtitle}
                className={styles.subtitle}
              />
            </RightToLeftElement>
          </div>
          <LeftToRightElement isInView={isInView} delay="1">
            <TryItForFreeButton />
          </LeftToRightElement>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerLeft}>
            <LeftToRightElement isInView={isInView}>
              <Logo />
              <p className={styles.text}>
                We built an elegant solution. Our team created a fully
                integrated sales and marketing solution for SMBs
              </p>
            </LeftToRightElement>
          </div>
          <RightToLeftElement isInView={isInView} delay="1">
            <div className={styles.footerRight}>
              {footerListData.map((list, ind) => (
                <FooterList key={ind} type={list.type} items={list.items} />
              ))}
            </div>
          </RightToLeftElement>
        </div>
        <FadeInUpElement isInView={isInView} delay="1.5">
          <div className={styles.copyright}>
            <p className={styles.copyrightText}>
              © Copyright 2023 All Rights Reserved
            </p>
          </div>
        </FadeInUpElement>
      </footer>
    </Container>
  );
}
