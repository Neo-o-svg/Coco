import { cocaHelpHeaderData } from "../../data";

import Section from "../templates/Section";
import SectionSubtitle from "../shared/Text/SectionSubtitle/SectionSubtitle";
import SectionTitle from "../shared/Text/SectionTitle/SectionTitle";
import HelpCards from "../HelpCards/HelpCards";

import LeftToRightElement from "../templates/animationElements/LeftToRightElement/LeftToRightElement";

import styles from "./CocaHelp.module.scss";

export default function CocaHelp() {
  return (
    <Section darkBg>
      {(isInView) => (
        <>
          <LeftToRightElement isInView={isInView} delay="0.2">
            <SectionTitle
              title={cocaHelpHeaderData.title}
              className={`${styles.sectionTitle} whiteText`}
            />
          </LeftToRightElement>
          <LeftToRightElement isInView={isInView}>
            <SectionSubtitle
              text={cocaHelpHeaderData.subtitle}
              className={styles.subTitle}
            />
          </LeftToRightElement>
          <HelpCards isInView={isInView} />
        </>
      )}
    </Section>
  );
}
