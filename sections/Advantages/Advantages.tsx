import { useRef, useEffect, useState } from "react";

import { Pagination, Mousewheel, EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

import useOnScreen from "@/hooks/useOnScreen";

import CardAdvantages from "@/components/CardAdvantages";

import styles from "./Advantages.module.scss";

SwiperCore.use([Mousewheel]);

interface ButtonItems {
  text: string;
  url: string;
}

interface CardAdvantagesItem {
  number: string;
  icon: any;
  textFirst: any;
  textSecond: any;
  button: ButtonItems;
}

interface AdvantagesItems {
  title: string;
  cardAdvantages: CardAdvantagesItem[];
}

interface AdvantagesProps {
  data: AdvantagesItems;
}

const Advantages: React.FC<AdvantagesProps> = ({ data }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const onScreen = useOnScreen(targetRef, 0.1);

  useEffect(() => {
    if (onScreen) {
      setIsVisible(true);
    }
  }, [onScreen]);

  return (
    <section ref={targetRef} id="advantages" className={styles["advantages"]}>
      <p
        className={`${styles["advantages__title"]} ${
          isVisible ? styles["advantages__title-active"] : "hidden"
        }`}
      >
        {data.title}
      </p>
      <div
        id="verticalSlider"
        className={`${styles["slider__wrapper"]} ${
          isVisible ? styles["slider-active"] : "hidden"
        }`}
      >
        {data.cardAdvantages.map((cardContent, index) => (
          <div key={index}>
            <CardAdvantages {...cardContent} />
          </div>
        ))}
      </div>
      <div className={styles["slider__wrapper-mobile"]}>
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          direction="horizontal"
          slidesPerView="auto"
          spaceBetween={8}
          className={styles["slider__inner"]}
        >
          {data.cardAdvantages.map((cardContent, index) => (
            <SwiperSlide key={index} className={styles["slider__slide"]}>
              <CardAdvantages {...cardContent} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Advantages;
