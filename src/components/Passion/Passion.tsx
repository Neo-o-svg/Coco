import useInView from "../../hooks/useInView";
import Container from "../Container/Container";

import { checkPassionItems } from "../../data";

import passionImage from "../../assets/images/passionImage.jpg";

import styles from "./Passion.module.scss";

export default function Passion() {
  const { ref, isInView } = useInView();

  return (
    <Container>
      <div
        ref={ref}
        className={`section fullHeightWrapper ${styles.passion} ${isInView ? styles.animate : ""}`}
      >
        <div className={styles.imageWrapper}>
          <img
            src={passionImage}
            alt="Statistic example"
            width="585"
            height="651"
            loading="lazy"
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Passion to increase company revenue up to 85%
          </h2>
          <p className={styles.text}>
            Automate your sales, marketing and service in one platform. Avoid
            date leaks and enable consistent messaging
          </p>
          <ul className={styles.list}>
            {checkPassionItems.map((el) => (
              <li className={styles.item} key={el.id}>
                <p className={styles.itemText}>{el.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
