import useInView from "../../hooks/useInView";

import Container from "../Container/Container";
import SectionHeader from "../shared/SectionHeader/SectionHeader";
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
      <div
        ref={ref}
        className={`section fullHeightWrapper  ${styles.trendingNews} ${isInView ? styles.animate : ""}`}
      >
        <SectionHeader
          title={headerData.title}
          text={headerData.text}
          className="sectionHeaderColumnCenter"
        />
        <TwoBlockSlider />
      </div>
    </Container>
  );
}
