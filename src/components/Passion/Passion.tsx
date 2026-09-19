import { checkPassionItems, passionHeaderData } from "../../data";

import Section from "../templates/Section";
import SectionTitle from "../shared/Text/SectionTitle/SectionTitle";
import SectionSubtitle from "../shared/Text/SectionSubtitle/SectionSubtitle";

import LeftToRightElement from "../templates/animationElements/LeftToRightElement/LeftToRightElement";
import RightToLeftElement from "../templates/animationElements/RightToLeftElement/RightToLeftElement";

import passionImage from "../../assets/images/passionImage.jpg";

import styles from "./Passion.module.scss";

export default function Passion() {
  return (
    <Section className={styles.passion}>
      <LeftToRightElement>
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
        <RightToLeftElement delay="1">
          <SectionTitle title={passionHeaderData.title} />
        </RightToLeftElement>
        <RightToLeftElement delay="1.4">
          <SectionSubtitle
            text={passionHeaderData.subtitle}
            className={styles.text}
          />
        </RightToLeftElement>
        <RightToLeftElement delay="1.8">
          <ul className={styles.list}>
            {checkPassionItems.map((el) => (
              <li className={styles.item} key={el.id}>
                <p className={styles.itemText}>{el.title}</p>
              </li>
            ))}
          </ul>
        </RightToLeftElement>
      </div>
    </Section>
  );
}
