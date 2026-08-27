import { trendingNewsHeaderData } from "../../data";

import FadeInDownElement from "../animationElements/FadeInDownElement/FadeInDownElement";

import Section from "../templates/Section";
import SectionSubtitle from "../shared/Text/SectionSubtitle/SectionSubtitle";
import SectionTitle from "../shared/Text/SectionTitle/SectionTitle";
import TwoBlockSlider from "../TwoBlockSlider/TwoBlockSlider";

import styles from "./TrendingNews.module.scss";

export default function TrendingNews() {
  return (
    <Section>
      {(isInView) => (
        <>
          <FadeInDownElement isInView={isInView}>
            <div className={styles.sectionHeader}>
              <SectionTitle title={trendingNewsHeaderData.title} />
              <SectionSubtitle text={trendingNewsHeaderData.subtitle} />
            </div>
          </FadeInDownElement>
          <FadeInDownElement isInView={isInView} delay="1">
            <TwoBlockSlider />
          </FadeInDownElement>
        </>
      )}
    </Section>
  );
}
