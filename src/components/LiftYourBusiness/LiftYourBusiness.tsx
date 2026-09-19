import { liftBusinessHeaderData, statisticItems } from "../../data";

import StatisticItem from "../StatisticItem/StatisticItem";

import Section from "../templates/Section";
import SectionTitle from "../shared/Text/SectionTitle/SectionTitle";
import SectionSubtitle from "../shared/Text/SectionSubtitle/SectionSubtitle";

import RightToLeftElement from "../templates/animationElements/RightToLeftElement/RightToLeftElement";
import FadeInDownElement from "../templates/animationElements/FadeInDownElement/FadeInDownElement";
import FadeInUpElement from "../templates/animationElements/FadeInUpElement/FadeInUpElement";

import businessImage from "../../assets/images/liftYourBusiness.jpg";

import styles from "./LiftYourBusiness.module.scss";

export default function LiftYourBusiness() {
  const base_delay = 2.5;
  const step = 0.2;

  return (
    <Section className={styles.liftYourBusiness}>
      <ul className={styles.statisticList}>
        {statisticItems.map((item, index) => (
          <RightToLeftElement delay={(base_delay + index * step).toString()}>
            <StatisticItem key={item.id} title={item.title} text={item.text} />
          </RightToLeftElement>
        ))}
      </ul>

      <FadeInDownElement>
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
        <FadeInUpElement delay="1.5" distance="50">
          <SectionTitle title={liftBusinessHeaderData.title} />
        </FadeInUpElement>
        <FadeInUpElement delay="2" distance="50">
          <SectionSubtitle text={liftBusinessHeaderData.subtitle} />
        </FadeInUpElement>
      </div>
    </Section>
  );
}
