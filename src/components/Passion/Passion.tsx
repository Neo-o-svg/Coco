import useInView from "../../hooks/useInView";

import { checkPassionItems } from "../../data";

import Container from "../Container/Container";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import SectionSubtitle from "../shared/SectionSubtitle/SectionSubtitle";

import LeftToRightElement from "../animationElements/LeftToRightElement/LeftToRightElement";
import RightToLeftElement from "../animationElements/RightToLeftElement/RightToLeftElement";

import passionImage from "../../assets/images/passionImage.jpg";

import styles from "./Passion.module.scss";

export default function Passion() {
  const { ref, isInView } = useInView();

  const headerData = {
    title: "Passion to increase company revenue up to 85%",
    text: `Automate your sales, marketing and service in one platform. 
          Avoid
          date leaks and enable consistent messaging`,
  };

  return (
    <Container>
      <div ref={ref} className={`section  ${styles.passion}`}>
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
            <SectionTitle title={headerData.title} />
          </RightToLeftElement>
          <RightToLeftElement isInView={isInView} delay="1.4">
            <SectionSubtitle
              text={headerData.text}
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
      </div>
    </Container>
  );
}
