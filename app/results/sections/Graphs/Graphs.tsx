import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

import useOnScreen from "@/hooks/useOnScreen";

import HorizontalScroll from "@/components/HorizontalScroll";

import arrowPrev from "@/images/arrowLeft.svg";
import arrowNext from "@/images/arrowRight.svg";

import styles from "./Graphs.module.scss";
interface GraphsProps {
  data: any;
}

const Graphs: React.FC<GraphsProps> = ({ data }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [titleNum, setTitleNum] = useState(0);
  const [title, setTitle] = useState(data[0].title);

  const onScreen = useOnScreen(targetRef, 0.05);

  useEffect(() => {
    if (onScreen) {
      setIsVisible(true);
    }
  }, [onScreen]);

  const handlePrev = () => {
    setTitleNum((titleNum - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setTitleNum((titleNum + 1) % data.length);
  };

  useEffect(() => {
    setTitle(data[titleNum].title);
    if (onScreen) {
      setIsVisible(true);
    }
  }, [onScreen, titleNum, data]);

  return (
    <section
      ref={targetRef}
      className={`${styles["graphs"]} ${
        isVisible ? styles["graphs-active"] : "hidden"
      }`}
    >
      <div className={styles["graphs__header"]}>
        <div
          className={styles["graphs__header-button"]}
          ref={navigationPrevRef}
          onClick={handleNext}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <g>
              <g>
                <path
                  d="M13.5 14L3.5 24L13.5 34"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 24H44"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
          </svg>
        </div>

        <p className={styles["graphs__header-title"]}>{title}</p>
        
        <div
          className={styles["graphs__header-button"]}
          ref={navigationNextRef}
          onClick={handleNext}
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <g>
              <g>
                <path
                  d="M34 34L44 24L34 14"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M43.5 24L3.5 24"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        allowTouchMove={false}
        loop={true}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper: any) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        className={styles["graphs__swiper"]}
      >
        {data.map((item: any, index: number) => (
          <SwiperSlide key={index} className={styles["graphs__swiper-slide"]}>
            <HorizontalScroll>
              <div className={styles["graphs__image"]}>
                <Image src={item.graph} alt="graph" />
              </div>
            </HorizontalScroll>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Graphs;
