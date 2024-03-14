import { useRef, useEffect, useState } from "react";

import useOnScreen from "@/hooks/useOnScreen";

import styles from "./Marketing.module.scss";
interface MarketingProps {
  data: any;
}

const Marketing: React.FC<MarketingProps> = ({ data }) => {
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
      className={`${styles["marketing"]} ${
        isVisible ? styles["marketing-active"] : "hidden"
      }`}
    >
      <div>
        <p className={styles["marketing__title"]}>{data.title}</p>
        <p className={styles["marketing__subtitle"]}>{data.subtitle}</p>
      </div>
      <div className={styles["marketing__cards-container"]}>
        {data.cards.map((item: any, index: number) => (
          <div key={index} className={styles["marketing__cards-item"]}>
            <p className={styles["marketing__cards-num"]}>{item.num}</p>
            <p className={styles["marketing__cards-title"]}>{item.title}</p>
            <div className={styles["marketing__cards-text"]}>{item.text}</div>
          </div>
        ))}
      </div>
      <div className={styles["marketing__subtitle"]}>
        {data.slogan}
      </div>
    </section>
  );
};

export default Marketing;
