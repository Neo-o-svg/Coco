import { companyLogos } from "../../data";

import useInView from "../../hooks/useInView";

import LeftToRightElement from "../animationElements/LeftToRightElement/LeftToRightElement";
import RightToLeftElement from "../animationElements/RightToLeftElement/RightToLeftElement";
import Container from "../Container/Container";
import SectionSubtitle from "../shared/SectionSubtitle/SectionSubtitle";
import SectionTitle from "../shared/SectionTitle/SectionTitle";

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
  const { ref, isInView } = useInView();

  const headerData = {
    title: "890+",
    text: " some big companies that we work with, and trust us very much",
  };

  return (
    <Container>
      <div ref={ref} className={`section ${styles.partners}`}>
        <div className={styles.companiesCount}>
          <LeftToRightElement isInView={isInView}>
            <SectionTitle title={headerData.title} />
          </LeftToRightElement>
          <RightToLeftElement isInView={isInView} delay="4.7">
            <SectionSubtitle text={headerData.text} />
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
      </div>
    </Container>
  );
}
