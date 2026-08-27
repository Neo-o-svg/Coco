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
  isInView: boolean;
}

function HelpCard({ image, title, text, index, isInView }: HelpCardProps) {
  const baseDelay = 1.5;
  const step = 0.2;

  const delay = (baseDelay + index * step).toString();

  const AnimationWrapper =
    index % 2 === 0 ? LeftToRightElement : RightToLeftElement;

  return (
    <AnimationWrapper delay={delay} isInView={isInView}>
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
    </AnimationWrapper>
  );
}

interface MainProps {
  isInView: boolean;
}

export default function HelpCards({ isInView }: MainProps) {
  return (
    <ul className={styles.cardsList}>
      {cards.map((card: CardItem, index: number) => (
        <HelpCard
          key={index}
          image={card.image}
          title={card.title}
          text={card.text}
          index={index}
          isInView={isInView}
        />
      ))}
    </ul>
  );
}
