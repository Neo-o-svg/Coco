import { companyLogos } from "../../data";
import useInView from "../../hooks/useInView";

import Container from "../Container/Container";

import styles from "./Partners.module.scss";

export default function Partners() {
  const { ref, isInView } = useInView();

  return (
    <Container>
      <div
        ref={ref}
        className={`section fullHeightWrapper ${styles.partners} ${isInView ? styles.animate : ""}`}
      >
        <div className={styles.companiesCount}>
          <h3 className={styles.title}>890+</h3>
          <p className={styles.text}>
            some big companies that we work with, and trust us very much
          </p>
        </div>
        <ul className={styles.companiesList}>
          {companyLogos.map(({ id, name, icon }) => (
            <li key={id} className={styles.companiesItem}>
              <img src={icon} alt={name} width="160" height="90" />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
