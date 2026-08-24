import useInView from "../../hooks/useInView";

import FadeInDownElement from "../animationElements/FadeInDownElement/FadeInDownElement";
import Container from "../Container/Container";
import SectionSubtitle from "../shared/SectionSubtitle/SectionSubtitle";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import TwoBlockSlider from "../TwoBlockSlider/TwoBlockSlider";

import styles from "./TrendingNews.module.scss";

export default function TrendingNews() {
  const { ref, isInView } = useInView();

  const headerData = {
    title: "Trending news from Coca",
    text: "we have some new Service to pamper you",
  };

  return (
    <Container>
      <div ref={ref} className="section">
        <FadeInDownElement isInView={isInView}>
          <div className={styles.sectionHeader}>
            <SectionTitle title={headerData.title} />
            <SectionSubtitle text={headerData.text} />
          </div>
        </FadeInDownElement>
        <FadeInDownElement isInView={isInView} delay="1">
          <TwoBlockSlider />
        </FadeInDownElement>
      </div>
    </Container>
  );
}
