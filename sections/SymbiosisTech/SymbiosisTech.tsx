import { useRef, useEffect, useState } from "react";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

import Image from "next/image";

import useOnScreen from "@/hooks/useOnScreen";

import CardTech from "@/components/CardTech";

import imgCircles from "@/images/circles.svg";


import styles from "./SymbiosisTech.module.scss";

interface CardTechItem {
  number: any;
  icon: any;
  text: any;
}

interface SymbiosisTechItems {
  title: any;
  cardTech: CardTechItem[];
}
interface SymbiosisTechProps {
  data: SymbiosisTechItems;
}

const SymbiosisTech: React.FC<SymbiosisTechProps> = ({ data }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const onScreen = useOnScreen(targetRef, 0.05);

  useEffect(() => {
    if (onScreen) {
      setIsVisible(true);
    }
  }, [onScreen]);

  return (
    <section
      ref={targetRef}
      id="symbiosisTech"
      className={styles["symbiosisTech"]}
    >
      <div className={styles["symbiosisTech__wrapper"]}>
        <Image
          src={imgCircles}
          alt="circles"
          width={112}
          height={97}
          className={`${styles["symbiosisTech__image"]} ${
            isVisible ? styles["symbiosisTech__image-active"] : "hidden"
          }`}
        />
        <h1
          className={`${styles["symbiosisTech__title"]} ${
            isVisible ? styles["symbiosisTech__title-active"] : "hidden"
          }`}
        >
          {data.title}
        </h1>
      </div>
      <div
        className={`${styles["slider__wrapper"]} ${
          isVisible ? styles["slider-active"] : "hidden"
        }`}
      >
        <div id="horizontalSlider" className={styles["slider__inner"]}>
          {data.cardTech.map((cardContent, index) => (
            <div key={index}>
              <CardTech {...cardContent} />
            </div>
          ))}
        </div>
      </div>
      <div
        id="symbiosisTech-swiper"
        className={`${styles["slider__wrapper-mobile"]} ${
          isVisible ? styles["slider-active"] : "hidden"
        }`}
      >
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          direction="horizontal"
          slidesPerView="auto"
          spaceBetween={32}
          className={styles["slider__inner"]}
        >
          {data.cardTech.map((cardContent, index) => (
            <SwiperSlide key={index} className={styles["slider__slide"]}>
              <CardTech {...cardContent} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SymbiosisTech;
