import { useState } from "react";

import Container from "../Container/Container";
import LeftToRightElement from "../animationElements/LeftToRightElement/LeftToRightElement";
import RightToLeftElement from "../animationElements/RightToLeftElement/RightToLeftElement";

import Customer_Growth from "../../assets/icons/Customer_Growth_Light.png";
import Sales from "../../assets/icons/Sales_Light.png";
import Statistic from "../../assets/icons/Statistic_Light.png";

import useInView from "../../hooks/useInView";

import styles from "./Hero.module.scss";
import HighlightedSubtitle from "../shared/HighlightedSubtitle/HighlightedSubtitle";

export default function Hero() {
  const { ref, isInView } = useInView();
  const [value, setValue] = useState("");

  const subtitle = ` When it comes to interactive marketing, we've got you covered. Be where the world is going`;

  return (
    <div ref={ref} className="fullHeightWrapper">
      <Container>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <LeftToRightElement isInView={isInView} delay="1.5">
              <h1 className={styles.heroTitle}>Digitally forward creative</h1>
              <HighlightedSubtitle text={subtitle} />
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
                <button type="button" className={styles.tryButton}>
                  Try for free
                </button>
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
