import { customerSayHeaderData } from "../../data";

import Section from "../templates/Section";
import OneBlockSlider from "../OneBlockSlider/OneBlockSlider";
import SectionSubtitle from "../shared/Text/SectionSubtitle/SectionSubtitle";
import SectionTitle from "../shared/Text/SectionTitle/SectionTitle";

import RightToLeftElement from "../templates/animationElements/RightToLeftElement/RightToLeftElement";
import LeftToRightElement from "../templates/animationElements/LeftToRightElement/LeftToRightElement";
import FadeInUpElement from "../templates/animationElements/FadeInUpElement/FadeInUpElement";

import styles from "./CustomerSay.module.scss";

export default function CustomerSay() {
  return (
    <Section className={styles.customerSay}>
      {(isInView) => (
        <>
          <div className={styles.sectionHeader}>
            <RightToLeftElement isInView={isInView}>
              <SectionTitle
                title={customerSayHeaderData.title}
                style={{ width: "530px" }}
              />
            </RightToLeftElement>
            <LeftToRightElement isInView={isInView} delay="1">
              <SectionSubtitle
                text={customerSayHeaderData.subtitle}
                style={{ width: "370px" }}
              />
            </LeftToRightElement>
          </div>
          <FadeInUpElement isInView={isInView}>
            <OneBlockSlider />
          </FadeInUpElement>
        </>
      )}
    </Section>
  );
}
