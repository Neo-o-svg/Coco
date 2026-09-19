import { customerSayHeaderData } from "../../data";

import Section from "../templates/Section";
import SectionSubtitle from "../shared/Text/SectionSubtitle/SectionSubtitle";
import SectionTitle from "../shared/Text/SectionTitle/SectionTitle";
import OneBlockSlider from "../OneBlockSlider/OneBlockSlider";

import RightToLeftElement from "../templates/animationElements/RightToLeftElement/RightToLeftElement";
import LeftToRightElement from "../templates/animationElements/LeftToRightElement/LeftToRightElement";
import FadeInUpElement from "../templates/animationElements/FadeInUpElement/FadeInUpElement";

import styles from "./CustomerSay.module.scss";

export default function CustomerSay() {
  return (
    <Section className={styles.customerSay}>
      <div className={styles.sectionHeader}>
        <RightToLeftElement>
          <SectionTitle
            title={customerSayHeaderData.title}
            className={styles.title}
          />
        </RightToLeftElement>
        <LeftToRightElement delay="1">
          <SectionSubtitle
            text={customerSayHeaderData.subtitle}
            className={styles.subtitle}
          />
        </LeftToRightElement>
      </div>
      <FadeInUpElement>
        <OneBlockSlider />
      </FadeInUpElement>
    </Section>
  );
}
