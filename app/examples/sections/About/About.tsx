import { useRef, useEffect, useState } from "react";

import Image from "next/image";

import useOnScreen from "@/hooks/useOnScreen";

import styles from "./About.module.scss";

interface AboutProps {
  data: any;
}

const About: React.FC<AboutProps> = ({ data }) => {
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
      <p className={styles["about__title"]}>{data.title}</p>
      <div className={styles["about__info"]}>
        <p className={styles["about__info-text"]}>{data.textFirst}</p>
        <div className={styles["about__info-company"]}>
          <div className={styles["about__info-company-name"]}>
            <Image src={data.company.logo} alt="logo" />
            <p className={styles["about__info-company-name-text"]}>
              {data.company.name}
            </p>
          </div>
          <p className={styles["about__info-company-text"]}>
            {data.company.text}
          </p>
        </div>
      </div>
      <div className={styles["about__cards"]}>
        {data.cards.map((item: any, index: number) => (
          <div key={index} className={styles["about__card"]}>
            <Image src={item.icon} alt="logo" width={64} height={64} />
            <div className={styles["about__card-text-wrapper"]}>
              <p className={styles["about__card-title"]}>{item.title}</p>
              <p className={styles["about__card-text"]}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <p className={styles["about__text"]}>{data.textSecond}</p>
    </section>
  );
};

export default About;
