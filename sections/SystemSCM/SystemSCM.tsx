import React, { useRef, useEffect, useState } from "react";

import useOnScreen from "@/hooks/useOnScreen";

import CardSCM from "@/components/CardSCM";

import styles from "./SystemSCM.module.scss";

interface CardSCMItems {
  icon: any;
  text: any;
}

interface SystemSCMItems {
  title: string;
  text: any;
  cardSCM: CardSCMItems[];
}

interface SystemSCMProps {
  data: SystemSCMItems;
}

const SystemSCM: React.FC<SystemSCMProps> = ({ data }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const onScreen = useOnScreen(targetRef, 0.1);

  useEffect(() => {
    if (onScreen) {
      setIsVisible(true);
    }
  }, [onScreen]);

  return (
    <section
      ref={targetRef}
      id="systemSCM"
      className={`${styles["systemSCM"]} ${
        isVisible ? styles["systemSCM-active"] : "hidden"
      }`}
    >
      <p className={styles["systemSCM__title"]}>{data.title}</p>
      <p className={styles["systemSCM__text"]}>{data.text}</p>
      <ul className={styles["systemSCM__cards"]}>
        {data.cardSCM.map((cardContent, index) => (
          <li key={index}>
            <CardSCM {...cardContent} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SystemSCM;
