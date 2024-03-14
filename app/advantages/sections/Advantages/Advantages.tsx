import { useRef, useEffect, useState } from "react";

import Image from "next/image";

import useOnScreen from "@/hooks/useOnScreen";

import Button from "@/components/Button";
import styles from "./Advantages.module.scss";

interface AdvantagesProps {
  data: any;
}

const Advantages: React.FC<AdvantagesProps> = ({ data }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  const onScreen = useOnScreen(targetRef, 0.3);

  useEffect(() => {
    if (onScreen) {
      setIsVisible(true);
    }
  }, [onScreen]);

  return (
    <section ref={targetRef} className={styles["advantages"]}>
      <p
        className={`${styles["advantages__title"]} ${
          isVisible ? styles["advantages__title-active"] : "hidden"
        }`}
      >
        {data.title}
      </p>
      <div className={styles["advantages__card"]}>
        {data.cardAdvantages.map((cardContent: any, index: number) => (
          <div
            key={index}
            className={`${styles["advantages__card-wrapper"]} ${
              index % 2 === 1 ? styles["advantages__card-reverse"] : ""
            } ${
              isVisible && index % 2
                ? styles["advantages__card-reverse--active"]
                : styles["advantages__card-wrapper--active"]
            }`}
          >
            <div className={styles["advantages__card-text"]}>
              <div className={styles["advantages__card-text-number"]}>
                {cardContent.number}
              </div>
              <div className={styles["advantages__card-text-first"]}>
                {cardContent.textFirst}
              </div>
              <div className={styles["advantages__card-text-second"]}>
                {cardContent.textSecond}
              </div>
              <div className={styles["advantages__card-button"]}>
                <Button
                  text={cardContent.button.text}
                  url={cardContent.button.url}
                />
              </div>
            </div>
            <Image
              src={cardContent.icon}
              alt="card"
              className={styles["advantages__image"]}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
