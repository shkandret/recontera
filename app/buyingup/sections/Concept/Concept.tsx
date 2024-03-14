import { useRef, useEffect, useState } from "react";

import Image from "next/image";

import useOnScreen from "@/hooks/useOnScreen";

import styles from "./Concept.module.scss";

import verticalLine from "@/images/BuyingupVerticalLine.png";
import horizontalLine from "@/images/BuyingupHorizontalLine.png";

interface ConceptProps {
  data: any;
}

const Concept: React.FC<ConceptProps> = ({ data }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const onScreen = useOnScreen(targetRef, 0.1);

  useEffect(() => {
    if (onScreen) {
      setIsVisible(true);
    }
  }, [onScreen]);

  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <section
      ref={targetRef}
      className={`${styles["concept"]} ${
        isVisible ? styles["concept-active"] : "hidden"
      }`}
    >
      <p className={styles["concept__title"]}>{data.title}</p>
      <div className={styles["concept__container"]}>
        <div className={styles["concept__block"]}>
          <div className={styles["concept__cards"]}>
            <p className={styles["concept__cards-title"]}>
              {data.cards.concept1.title}
            </p>
            <div className={styles["concept__cards-list"]}>
              {data.cards.concept1.description}
            </div>
          </div>

          <p
            className={`${styles["concept__vs"]} ${styles["concept__vs-mobile"]}`}
          >
            <Image src={horizontalLine} alt="line" width={80} height={0} />
            VS
            <Image src={horizontalLine} alt="line" width={80} height={0} />
          </p>

          <div className={styles["concept__cards"]}>
            <p className={styles["concept__cards-title"]}>
              {data.cards.concept2.title}
            </p>
            <div className={styles["concept__cards-list"]}>
              {data.cards.concept2.description}
            </div>
          </div>
        </div>

        <div className={styles["concept__block"]}>
          <div className={styles["concept__cards"]}>
            <p className={styles["concept__cards-title"]}>
              {data.cards.concept3.title}
            </p>
            <div className={styles["concept__cards-list"]}>
              {data.cards.concept3.description}
            </div>
          </div>

          <p className={styles["concept__vs"]}>
            {windowWidth >= 768 ? (
              <>
                <Image src={verticalLine} alt="line" width={0} height={400} />
                VS
                <Image src={verticalLine} alt="line" width={0} height={400} />
              </>
            ) : (
              <>
                <Image src={horizontalLine} alt="line" width={80} height={0} />
                VS
                <Image src={horizontalLine} alt="line" width={80} height={0} />
              </>
            )}
          </p>

          <div className={styles["concept__cards"]}>
            <p className={styles["concept__cards-title"]}>
              {data.cards.concept4.title}
            </p>
            <div className={styles["concept__cards-list"]}>
              {data.cards.concept4.description}
            </div>
          </div>
        </div>

        <div className={styles["concept__block"]}>
          <div className={styles["concept__cards"]}>
            <p className={styles["concept__cards-title"]}>
              {data.cards.concept5.title}
            </p>
            <div className={styles["concept__cards-list"]}>
              {data.cards.concept5.description}
            </div>
          </div>

          <p
            className={`${styles["concept__vs"]} ${styles["concept__vs-mobile"]}`}
          >
            <Image src={horizontalLine} alt="line" width={80} height={0} />
            VS
            <Image src={horizontalLine} alt="line" width={80} height={0} />
          </p>

          <div className={styles["concept__cards"]}>
            <p className={styles["concept__cards-title"]}>
              {data.cards.concept6.title}
            </p>
            <div className={styles["concept__cards-list"]}>
              {data.cards.concept6.description}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concept;
