import { cards } from "../../data";

import type { CardItem } from "../../types";

import LeftToRightElement from "../templates/animationElements/LeftToRightElement/LeftToRightElement";
import RightToLeftElement from "../templates/animationElements/RightToLeftElement/RightToLeftElement";

import styles from "./HelpCards.module.scss";

interface HelpCardProps {
  image: string;
  title: string;
  text: string;
  index: number;
}

function HelpCard({ image, title, text, index }: HelpCardProps) {
  const baseDelay = 1.5;
  const step = 0.2;

  const delay = (baseDelay + index * step).toString();

  const AnimationWrapper =
    index % 2 === 0 ? LeftToRightElement : RightToLeftElement;

  return (
    <AnimationWrapper delay={delay}>
      <li className={styles.card}>
        <img
          className={styles.icon}
          src={image}
          alt={title}
          width="40"
          height="40"
          loading="lazy"
        />
        <h3 className={`${styles.title} whiteText`}>{title}</h3>
        <p className={`${styles.text} greyText`}>{text}</p>
      </li>
    </AnimationWrapper>
  );
}

export default function HelpCards() {
  return (
    <ul className={styles.cardsList}>
      {cards.map((card: CardItem, index: number) => (
        <HelpCard
          key={index}
          image={card.image}
          title={card.title}
          text={card.text}
          index={index}
        />
      ))}
    </ul>
  );
}
