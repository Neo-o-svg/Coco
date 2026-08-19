import { cards } from "../../data";

import type { CardItem } from "../../types";

import styles from "./HelpCards.module.scss";

interface HelpCardProps {
  image: string;
  title: string;
  text: string;
}

function HelpCard({ image, title, text }: HelpCardProps) {
  return (
    <li className={styles.card}>
      <img
        className={styles.icon}
        src={image}
        alt={title}
        width="40"
        height="40"
        loading="lazy"
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </li>
  );
}

interface MainProps {
  isInView: boolean;
}

export default function HelpCards({ isInView }: MainProps) {
  return (
    <ul className={`${styles.cardsList} ${isInView ? styles.animate : ""}`}>
      {cards.map((card: CardItem, index: number) => (
        <HelpCard
          key={index}
          image={card.image}
          title={card.title}
          text={card.text}
        />
      ))}
    </ul>
  );
}
