import { weDoItHeaderData, weDoItList } from "../../data";

import RightToLeftElement from "../animationElements/RightToLeftElement/RightToLeftElement";

import Section from "../templates/Section";
import SectionSubtitle from "../shared/Text/SectionSubtitle/SectionSubtitle";
import SectionTitle from "../shared/Text/SectionTitle/SectionTitle";
import WeDoItItem from "../WeDoItItem/WeDoItItem";

import styles from "./WeDoIt.module.scss";

export default function WeDoIt() {
  return (
    <Section className={styles.weDoIt}>
      {(isInView) => (
        <>
          <div className={styles.info}>
            <RightToLeftElement duration="1" isInView={isInView}>
              <SectionTitle title={weDoItHeaderData.title} />
            </RightToLeftElement>
            <RightToLeftElement duration="1.5" isInView={isInView}>
              <SectionSubtitle text={weDoItHeaderData.subtitle} />
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
        </>
      )}
    </Section>
  );
}
