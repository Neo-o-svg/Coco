import { useState, type CSSProperties } from "react";

import useInView from "../../hooks/useInView";

import { heroHeaderData } from "../../data";

import Customer_Growth from "../../assets/icons/Customer_Growth_Light.png";
import Sales from "../../assets/icons/Sales_Light.png";
import Statistic from "../../assets/icons/Statistic_Light.png";
import PinkEllipse from "../../assets/icons/EllipsePink.png";

import HighlightedSubtitle from "../shared/Text/HighlightedSubtitle/HighlightedSubtitle";
import TryItForFreeButton from "../shared/Buttons/TryItForFreeButton/TryItForFreeButton";
import Container from "../templates/Container/Container";
import BackgroundDecor from "../shared/BackgroundDecor/BackgroundDecor";

import LeftToRightElement from "../templates/animationElements/LeftToRightElement/LeftToRightElement";
import RightToLeftElement from "../templates/animationElements/RightToLeftElement/RightToLeftElement";

import styles from "./Hero.module.scss";

export default function Hero() {
  const { ref, isInView } = useInView();
  const [value, setValue] = useState("");

  const subtitleMobile = `Our biggest challenge is making sure we're always designing and building products that will help you run your business better.`;

  return (
    <div ref={ref} className="fullHeightWrapper">
      <Container>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <BackgroundDecor
              src={PinkEllipse}
              style={
                {
                  "--decor-width": "55.1rem",
                  "--decor-height": "55.1rem",
                  "--decor-top": "-15%",
                  "--decor-left": "0",
                } as CSSProperties
              }
              className={styles.mobileDecor}
            />
            <LeftToRightElement isInView={isInView} delay="1.5">
              <h1 className={styles.heroTitle}>{heroHeaderData.title}</h1>
              <HighlightedSubtitle
                text={heroHeaderData.subtitle}
                className={styles.hSubtitleDesktop}
              />
              <HighlightedSubtitle
                text={subtitleMobile}
                className={styles.hSubtitleMobile}
              />
            </LeftToRightElement>
            <LeftToRightElement isInView={isInView} delay="2">
              <form className={styles.tryForFreeCapture}>
                <input
                  type="email"
                  id="email-subscription"
                  name="email-subscription"
                  aria-label="Email address"
                  placeholder="Enter your email"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  required
                  className={styles.emailInput}
                />
                <TryItForFreeButton />
              </form>
            </LeftToRightElement>
          </div>
          <RightToLeftElement isInView={isInView} delay="1.75">
            <div className={styles.heroImages}>
              <img
                className={styles.customer}
                src={Customer_Growth}
                alt="Customer Growth"
                width="214"
                height="221"
                loading="eager"
                fetchPriority="high"
              />

              <img
                className={styles.sales}
                src={Sales}
                alt="Sales"
                width="419"
                height="346"
                loading="eager"
                fetchPriority="high"
              />
              <img
                className={styles.statistics}
                src={Statistic}
                alt="Statistic"
                width="419"
                height="119"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </RightToLeftElement>
        </div>
      </Container>
    </div>
  );
}
