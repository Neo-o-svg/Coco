import { checkPassionItems, passionHeaderData } from "../../data";

import Section from "../templates/Section";
import SectionTitle from "../shared/Text/SectionTitle/SectionTitle";
import SectionSubtitle from "../shared/Text/SectionSubtitle/SectionSubtitle";

import LeftToRightElement from "../animationElements/LeftToRightElement/LeftToRightElement";
import RightToLeftElement from "../animationElements/RightToLeftElement/RightToLeftElement";

import passionImage from "../../assets/images/passionImage.jpg";

import styles from "./Passion.module.scss";

export default function Passion() {
  return (
    <Section className={styles.passion}>
      {(isInView) => (
        <>
          <LeftToRightElement isInView={isInView}>
            <div className={styles.imageWrapper}>
              <img
                src={passionImage}
                alt="Statistic example"
                width="585"
                height="651"
                loading="lazy"
              />
            </div>
          </LeftToRightElement>
          <div className={styles.content}>
            <RightToLeftElement isInView={isInView} delay="1">
              <SectionTitle title={passionHeaderData.title} />
            </RightToLeftElement>
            <RightToLeftElement isInView={isInView} delay="1.4">
              <SectionSubtitle
                text={passionHeaderData.subtitle}
                style={{ marginBottom: "50px" }}
              />
            </RightToLeftElement>
            <RightToLeftElement isInView={isInView} delay="1.8">
              <ul className={styles.list}>
                {checkPassionItems.map((el) => (
                  <li className={styles.item} key={el.id}>
                    <p className={styles.itemText}>{el.title}</p>
                  </li>
                ))}
              </ul>
            </RightToLeftElement>
          </div>
        </>
      )}
    </Section>
  );
}
