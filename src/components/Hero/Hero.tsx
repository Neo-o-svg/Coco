import { useState } from "react";

import Container from "../Container/Container";

import Customer_Growth from "../../assets/icons/Customer_Growth_Light.png";
import Sales from "../../assets/icons/Sales_Light.png";
import Statistic from "../../assets/icons/Statistic_Light.png";

import styles from "./Hero.module.scss";

export default function Hero() {
  const [value, setValue] = useState("");

  return (
    <div className="fullHeightWrapper">
      <Container>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Digitally forward creative</h1>
            <p className={styles.text}>
              When it comes to interactive marketing, we've got you covered. Be
              where the world is going
            </p>
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
          </div>
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
        </div>
      </Container>
    </div>
  );
}
