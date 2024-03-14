import { useRef, useEffect, useState } from "react";

import Image from "next/image";

import useOnScreen from "@/hooks/useOnScreen";

import styles from "./About.module.scss";

interface AboutProps {
  data: any;
  index: number;
}

const About: React.FC<AboutProps> = ({ data, index }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  const onScreen = useOnScreen(targetRef, 0.3);

  useEffect(() => {
    if (onScreen) {
      setIsVisible(true);
    }
  }, [onScreen]);

  return (
    <section
      ref={targetRef}
      className={`${styles["about"]} ${
        isVisible ? styles["about-active"] : "hidden"
      }`}
    >
      <Image
        src={data.cardAdvantages[index - 1].icon}
        alt="bg2"
        width={560}
        height={560}
        className={styles["about__background"]}
      />
      <p className={styles["about__title"]}>{`${data.title}${index}`}</p>
      <div className={styles["about__text"]}>
        <p className={styles["about__text-first"]}>
          {data.cardAdvantages[index - 1].textFirst}
        </p>
        <p className={styles["about__text-second"]}>
          {data.cardAdvantages[index - 1].textSecond}
        </p>
      </div>
    </section>
  );
};

export default About;
