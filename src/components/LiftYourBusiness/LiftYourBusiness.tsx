import useInView from "../../hooks/useInView";

import { statisticItems } from "../../data";

import StatisticItem from "../StatisticItem/StatisticItem";
import Container from "../Container/Container";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import SectionSubtitle from "../shared/SectionSubtitle/SectionSubtitle";

import FadeInDownElement from "../animationElements/FadeInDownElement/FadeInDownElement";
import FadeInUpElement from "../animationElements/FadeInUpElement/FadeInUpElement";
import RightToLeftElement from "../animationElements/RightToLeftElement/RightToLeftElement";

import businessImage from "../../assets/images/liftYourBusiness.jpg";

import styles from "./LiftYourBusiness.module.scss";

export default function LiftYourBusiness() {
  const { ref, isInView } = useInView();

  const base_delay = 2.5;
  const step = 0.2;

  const headerData = {
    title: `Lift your business to new heights with our digital marketing
              services`,
    text: `To build software that gives customer facing teams in small and
              medium-sized businesses the ability to create rewarding and
              long-lasting relationships with customers`,
  };

  return (
    <Container>
      <div ref={ref} className={`section ${styles.liftYourBusiness}`}>
        <ul className={styles.statisticList}>
          {statisticItems.map((item, index) => (
            <RightToLeftElement
              isInView={isInView}
              delay={(base_delay + index * step).toString()}
            >
              <StatisticItem
                key={item.id}
                title={item.title}
                text={item.text}
              />
            </RightToLeftElement>
          ))}
        </ul>

        <FadeInDownElement isInView={isInView}>
          <div className={styles.imageWrapper}>
            <img
              src={businessImage}
              alt="Networking image"
              width="1200"
              height="536"
              loading="lazy"
            />
          </div>
        </FadeInDownElement>

        <div className={styles.callToActionContent}>
          <FadeInUpElement isInView={isInView} delay="1.5" distance="50">
            <SectionTitle title={headerData.title} />
          </FadeInUpElement>
          <FadeInUpElement isInView={isInView} delay="2" distance="50">
            <SectionSubtitle text={headerData.text} />
          </FadeInUpElement>
        </div>
      </div>
    </Container>
  );
}
