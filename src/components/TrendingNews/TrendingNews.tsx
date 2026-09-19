import { trendingNewsHeaderData } from "../../data";

import TwoBlockSlider from "../TwoBlockSlider/TwoBlockSlider";

import FadeInDownElement from "../templates/animationElements/FadeInDownElement/FadeInDownElement";

import Section from "../templates/Section";
import SectionSubtitle from "../shared/Text/SectionSubtitle/SectionSubtitle";
import SectionTitle from "../shared/Text/SectionTitle/SectionTitle";

import styles from "./TrendingNews.module.scss";

export default function TrendingNews() {
  return (
    <Section>
      <FadeInDownElement>
        <div className={styles.sectionHeader}>
          <SectionTitle title={trendingNewsHeaderData.title} />
          <SectionSubtitle text={trendingNewsHeaderData.subtitle} />
        </div>
      </FadeInDownElement>
      <FadeInDownElement delay="1">
        <TwoBlockSlider />
      </FadeInDownElement>
    </Section>
  );
}
