import { companyLogos, partnersHeaderData } from "../../data";

import Section from "../templates/Section";
import SectionSubtitle from "../shared/Text/SectionSubtitle/SectionSubtitle";
import SectionTitle from "../shared/Text/SectionTitle/SectionTitle";

import LeftToRightElement from "../templates/animationElements/LeftToRightElement/LeftToRightElement";
import RightToLeftElement from "../templates/animationElements/RightToLeftElement/RightToLeftElement";

import styles from "./Partners.module.scss";

interface CompanyItemProps {
  icon: string;
  name: string;
  index: number;
  isInView: boolean;
}

function CompanyItem({ icon, name, index, isInView }: CompanyItemProps) {
  const baseDelay = 1;
  const step = 0.4;

  const delay = (baseDelay + index * step).toString();

  const AnimationWrapper = index < 4 ? LeftToRightElement : RightToLeftElement;

  return (
    <AnimationWrapper delay={delay} distance="200" isInView={isInView}>
      <li className={styles.companiesItem}>
        <img src={icon} alt={name} width="160" height="90" />
      </li>
    </AnimationWrapper>
  );
}

export default function Partners() {
  return (
    <Section className={styles.partners}>
      {(isInView) => (
        <>
          <div className={styles.companiesCount}>
            <LeftToRightElement isInView={isInView}>
              <SectionTitle title={partnersHeaderData.title} />
            </LeftToRightElement>
            <RightToLeftElement isInView={isInView} delay="4.7">
              <SectionSubtitle text={partnersHeaderData.subtitle} />
            </RightToLeftElement>
          </div>
          <ul className={styles.companiesList}>
            {companyLogos.map(({ id, name, icon }, index) => (
              <CompanyItem
                key={id}
                icon={icon}
                name={name}
                index={index}
                isInView={isInView}
              />
            ))}
          </ul>
        </>
      )}
    </Section>
  );
}
