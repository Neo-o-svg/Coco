import { weDoItList } from "../../data";

import useInView from "../../hooks/useInView";

import RightToLeftElement from "../animationElements/RightToLeftElement/RightToLeftElement";
import Container from "../Container/Container";
import SectionSubtitle from "../shared/SectionSubtitle/SectionSubtitle";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import WeDoItItem from "../WeDoItItem/WeDoItItem";

import styles from "./WeDoIt.module.scss";

export default function WeDoIt() {
  const { ref, isInView } = useInView();

  const headerData = {
    title: "Advertise, analyze, and optimize! We do it all for you",
    text: `Build more meaningful and lasting relationships - <br /> better
              understand their needs, identify new opportunities to help address
              any problems faster`,
  };

  return (
    <Container>
      <div ref={ref} className={`section ${styles.weDoIt}`}>
        <div className={styles.info}>
          <RightToLeftElement duration="1" isInView={isInView}>
            <SectionTitle title={headerData.title} />
          </RightToLeftElement>
          <RightToLeftElement duration="1.5" isInView={isInView}>
            <SectionSubtitle text={headerData.text} />
          </RightToLeftElement>
        </div>
        <ul className={styles.list}>
          {weDoItList.map(({ image, title, text, id }, index) => (
            <WeDoItItem
              key={id}
              image={image}
              title={title}
              text={text}
              index={index}
              isInView={isInView}
            />
          ))}
        </ul>
      </div>
    </Container>
  );
}
