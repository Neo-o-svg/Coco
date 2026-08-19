import { useState } from "react";

import DoubleArrowButton from "../shared/DoubleArrowButton/DoubleArrowButton";
import TwoBlockSliderItem from "../TwoBlockSliderItem/TwoBlockSliderItem";

import { twoBlockSlider } from "../../data";

import styles from "./TwoBlockSlider.module.scss";

const VISIBLE_COUNT = 2;

export default function TwoBlockSlider() {
  const [activeId, setActiveId] = useState(0);

  const prev = () => {
    setActiveId((activeId) => {
      if (activeId > 0) {
        return activeId - 1;
      } else {
        return activeId;
      }
    });
  };
  const next = () => {
    setActiveId((activeId) => {
      if (activeId < twoBlockSlider.length - VISIBLE_COUNT) {
        return activeId + 1;
      } else {
        return activeId;
      }
    });
  };

  // сдвиг ленты: каждый слайд занимает 100% / VISIBLE_COUNT ширины окна
  const offset = activeId * (100 / VISIBLE_COUNT);

  return (
    <div className={styles.sliderWrap}>
      <div className={styles.sliderViewport}>
        <div className={styles.sliderActions}>
          <DoubleArrowButton onLeftClick={prev} onRightClick={next} />
        </div>
        <div
          className={styles.sliderTrack}
          style={{ transform: `translateX(-${offset}%)` }}
        >
          {twoBlockSlider.map(({ id, date, author, title, image }) => {
            const isActive = id === activeId;
            return (
              <TwoBlockSliderItem
                key={id}
                date={date}
                author={author}
                title={title}
                image={image}
                isActive={isActive}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
