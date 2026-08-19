import { weDoItList } from "../../data";

import useInView from "../../hooks/useInView";

import Container from "../Container/Container";
import WeDoItItem from "../WeDoItItem/WeDoItItem";

import styles from "./WeDoIt.module.scss";

export default function WeDoIt() {
  const { ref, isInView } = useInView();

  return (
    <Container>
      <div
        ref={ref}
        className={`section fullHeightWrapper ${styles.weDoIt} ${isInView ? styles.animate : ""}`}
      >
        <div className={styles.info}>
          <h2 className={styles.title}>
            Advertise, analyze, and optimize! We do it all for you
          </h2>
          <p className={styles.text}>
            Build more meaningful and lasting relationships - <br /> better
            understand their needs, identify new opportunities to help address
            any problems faster
          </p>
        </div>
        <ul className={styles.list}>
          {weDoItList.map(({ image, title, text, id }) => (
            <WeDoItItem key={id} image={image} title={title} text={text} />
          ))}
        </ul>
      </div>
    </Container>
  );
}
