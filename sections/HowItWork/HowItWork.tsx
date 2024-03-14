import React, { useRef, useEffect, useState } from "react";

import useOnScreen from "@/hooks/useOnScreen";
import ParticleCanvas from "@/components/ParticleCanvas/ParticleCanvas";

import styles from "./HowItWork.module.scss";

interface HowItWorkItems {
  title: string;
  text: any;
}

interface HowItWorkProps {
  data: HowItWorkItems;
}

const HowItWork: React.FC<HowItWorkProps> = ({ data }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const onScreen = useOnScreen(targetRef, 0.2);

  useEffect(() => {
    if (onScreen) {
      setIsVisible(true);
    }
  }, [onScreen]);

  return (
    <section ref={targetRef} id="howItWork" className={styles["howItWork"]}>
      <div
        className={`${styles["howItWork__video"]}  ${
          isVisible ? styles["howItWork__video-active"] : "hidden"
        }`}
      >
        <div>
          <ParticleCanvas />
        </div>
      </div>
      <div className={styles["howItWork__container"]}>
        <p
          className={`${styles["howItWork__title"]} ${
            isVisible ? styles["howItWork__title-active"] : "hidden"
          }`}
        >
          {data.title}
        </p>
        <p
          className={`${styles["howItWork__text"]} ${
            isVisible ? styles["howItWork__text-active"] : "hidden"
          }`}
        >
          {data.text}
        </p>
      </div>
    </section>
  );
};

export default HowItWork;
