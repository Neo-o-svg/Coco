import { useState } from "react";
import { oneBlockSlider } from "../../data";

import OneBlockSliderItem from "../OneBlockSliderItem/OneBlockSliderItem";
import OneSlideArrows from "../shared/Arrows/oneSlideArrows/oneSlideArrows";

import styles from "./OneBlockSlider.module.scss";

export default function OneBlockSlider() {
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
      if (activeId < oneBlockSlider.length - 1) {
        return activeId + 1;
      } else {
        return activeId;
      }
    });
  };

  const offset = activeId * 100;

  return (
    <div className={styles.sliderWrap}>
      <div className={styles.sliderViewport}>
        <div className={styles.sliderActions}>
          <OneSlideArrows onLeftClick={prev} onRightClick={next} />
        </div>
        <div
          className={styles.sliderTrack}
          style={{ transform: `translateX(-${offset}%)` }}
        >
          {oneBlockSlider.map(
            ({ id, rate, comment, photo, name, position }) => {
              const isActive = id === activeId;
              return (
                <OneBlockSliderItem
                  key={id}
                  rate={rate}
                  comment={comment}
                  photo={photo}
                  name={name}
                  position={position}
                  isActive={isActive}
                />
              );
            },
          )}
        </div>
      </div>
    </div>
  );
}
