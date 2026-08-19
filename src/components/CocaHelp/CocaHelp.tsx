import Container from "../Container/Container";
import HelpCards from "../HelpCards/HelpCards";

import useInView from "../../hooks/useInView";

import sharedStyles from "../shared/Section.module.scss";
import styles from "./CocaHelp.module.scss";

export default function CocaHelp() {
  const { ref, isInView } = useInView();

  return (
    <div className={`${sharedStyles.darkBgWrapper} fullHeightWrapper`}>
      <Container>
        <div
          ref={ref}
          className={`section ${styles.cocaHelp} ${isInView ? styles.animate : ""}`}
        >
          <h2 className={styles.title}>
            Coca help our client solve complex customer problems with date that
            does more.
          </h2>
          <p className={styles.text}>
            Our platform offers the modern enterprise full control of how date
            can be access and used with industry leading software solutions for
            identity, activation, and date collaboration
          </p>
          <HelpCards isInView={isInView} />
        </div>
      </Container>
    </div>
  );
}
