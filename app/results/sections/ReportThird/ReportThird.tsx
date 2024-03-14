import { useRef, useEffect, useState } from "react";

import Image from "next/image";

import useOnScreen from "@/hooks/useOnScreen";

import TotalClientsTable from "@/components/TotalClientsTable";
import HorizontalScroll from "@/components/HorizontalScroll";

import styles from "./ReportThird.module.scss";

interface ReportThirdProps {
  data: any;
}

const ReportThird: React.FC<ReportThirdProps> = ({ data }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const onScreen = useOnScreen(targetRef, 0.05);

  useEffect(() => {
    if (onScreen) {
      setIsVisible(true);
    }
  }, [onScreen]);

  return (
    <section
      ref={targetRef}
      className={`${styles["reportThird"]} ${
        isVisible ? styles["reportThird-active"] : "hidden"
      }`}
    >
      <p className={styles["reportThird__title"]}>{data.title}</p>
      <p className={styles["reportThird__subtitle"]}>{data.subtitle}</p>
      <div className={styles["reportThird__text"]}>{data.text}</div>
      <div className={styles["reportThird__promotionSystem"]}>
        <p className={styles["reportThird__promotionSystem-title"]}>
          {data.promotionSystem.title}
        </p>
        <HorizontalScroll>
          <div className={styles["reportThird__stroke"]} />
          <Image src={data.promotionSystem.table} alt="graph" />
        </HorizontalScroll>
      </div>
      <div className={styles["reportThird__totalClients"]}>
        <TotalClientsTable data={data.totalClients} />
      </div>
      <div className={styles["reportThird__options"]}>
        <p className={styles["reportThird__options-title"]}>
          {data.options.title}
        </p>
        <div className={styles["reportThird__options-items"]}>
          {data.options.optList.map((item: any, index: number) => (
            <div key={index} className={styles["reportThird__card"]}>
              <p className={styles["reportThird__card-num"]}>{item.num}</p>
              <p className={styles["reportThird__card-text"]}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReportThird;
