import { useRef, useEffect, useState } from "react";

import Image from "next/image";

import useOnScreen from "@/hooks/useOnScreen";

import imgShuffle from "@/images/shuffle.svg";
import imgBrowser from "@/images/browser.svg";

import styles from "./WhyHow.module.scss";


interface WhyHowProps {
  data: any;
}

const WhyHow: React.FC<WhyHowProps> = ({ data }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const onScreen = useOnScreen(targetRef, 0);

  useEffect(() => {
    if (onScreen) {
      setIsVisible(true);
    }
  }, [onScreen]);

  return (
    <section
      ref={targetRef}
      className={`${styles["whyHow"]} ${
        isVisible ? styles["whyHow-active"] : "hidden"
      }`}
    >
      <div
        className={`${styles["whyHow__block"]} ${
          isVisible ? styles["whyHow__block-left--active"] : "hidden"
        }`}
      >
        <div className={styles["whyHow__block-header"]}>
          <Image
            src={imgShuffle}
            alt="icon"
            className={styles["whyHow__block-image"]}
          />
          <p
            className={styles["whyHow__block-title"]}
            style={{ color: "#FF563F" }}
          >
            Почему это необходимо?
          </p>
        </div>
        <p className={styles["whyHow__block-text"]}>{data.necessityText}</p>
      </div>
      <div
        className={`${styles["whyHow__block"]} ${
          isVisible ? styles["whyHow__block-right--active"] : "hidden"
        }`}
      >
        <div className={styles["whyHow__block-header"]}>
          <Image
            src={imgBrowser}
            alt="icon"
            className={styles["whyHow__block-image"]}
          />
          <p
            className={styles["whyHow__block-title"]}
            style={{ color: "#9DDCFF" }}
          >
            Как «РЕКОНТЕРА» решает эту проблему?
          </p>
        </div>
        <p className={styles["whyHow__block-text"]}>{data.decisionText}</p>
      </div>
    </section>
  );
};

export default WhyHow;
