import StatisticItem from "../StatisticItem/StatisticItem";
import Container from "../Container/Container";

import useInView from "../../hooks/useInView";

import { statisticItems } from "../../data";

import businessImage from "../../assets/images/liftYourBusiness.jpg";

import styles from "./LiftYourBusiness.module.scss";

export default function LiftYourBusiness() {
  const { ref, isInView } = useInView();

  return (
    <Container>
      <div
        ref={ref}
        className={`section fullHeightWrapper  ${styles.liftYourBusiness} ${isInView ? styles.animate : ""}`}
      >
        <ul className={styles.statisticList}>
          {statisticItems.map((item) => (
            <StatisticItem key={item.id} title={item.title} text={item.text} />
          ))}
        </ul>

        <div className={styles.imageWrapper}>
          <img
            src={businessImage}
            alt="Networking image"
            width="1200"
            height="536"
            loading="lazy"
          />
        </div>

        <div className={styles.callToActionContent}>
          <h2 className={styles.title}>
            Lift your business to new heights with our digital marketing
            services
          </h2>
          <p className={styles.text}>
            To build software that gives customer facing teams in small and
            medium-sized businesses the ability to create rewarding and
            long-lasting relationships with customers
          </p>
        </div>
      </div>
    </Container>
  );
}
