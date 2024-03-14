import { useRef, useEffect, useState } from "react";

import useOnScreen from "@/hooks/useOnScreen";

import styles from "./Differences.module.scss";

interface DifferenceItem {
  number: string;
  textFirst: string;
}

interface DifferencesData {
  differencesUp: DifferenceItem[];
  differencesDown: DifferenceItem[];
}

interface DifferencesProps {
  data: DifferencesData;
}

const Differences: React.FC<DifferencesProps> = ({ data }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const onScreen = useOnScreen(targetRef, 0.3);

  useEffect(() => {
    if (onScreen) {
      setIsVisible(true);
    }
  }, [onScreen]);

  return (
    <section
      ref={targetRef}
      className={`${styles["differences"]} ${
        isVisible ? styles["differences-active"] : "hidden"
      }`}
    >
      <div className={styles["differences__content"]}>
        <div className={styles["differences__up"]}>
          {data.differencesUp.map((item: any, index: number) => (
            <div key={index} className={styles["differences__up--block"]}>
              <p className={styles["differences__number"]}>{item.number}</p>
              <p className={styles["differences__text--first"]}>
                {item.textFirst}
              </p>
            </div>
          ))}
        </div>
        {data.differencesDown.map((item: any, index: number) => (
          <div key={index} className={styles["differences__down--block"]}>
            <p className={styles["differences__number"]}>{item.number}</p>
            <p className={styles["differences__text--second"]}>
              {item.textSecond}
            </p>
            <p className={styles["differences__text--first"]}>
              {item.textFirst}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Differences;
