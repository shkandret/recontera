import { useRef, useEffect, useState } from "react";

import Image from "next/image";

import useOnScreen from "@/hooks/useOnScreen";

import Scrollbar, { ScrollbarPlugin } from "smooth-scrollbar";

import TotalClientsTable from "@/components/TotalClientsTable";
import HorizontalScroll from "@/components/HorizontalScroll";

import styles from "./ReportFirst.module.scss";

interface ReportFirstProps {
  data: any;
}

const ReportFirst: React.FC<ReportFirstProps> = ({ data }) => {
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
      className={`${styles["reportFirst"]} ${
        isVisible ? styles["reportFirst-active"] : "hidden"
      }`}
    >
      <p className={styles["reportFirst__title"]}>{data.title}</p>
      <p className={styles["reportFirst__subtitle"]}>{data.subtitle}</p>
      <div className={styles["reportFirst__promotionSystem"]}>
        <p className={styles["reportFirst__promotionSystem-title"]}>{data.promotionSystem.title}</p>
        <HorizontalScroll>
          <Image src={data.promotionSystem.table} alt="graph" />
        </HorizontalScroll>
      </div>
      <div className={styles["reportFirst__totalClients"]}>
        <TotalClientsTable data={data.totalClients} />
      </div>
      <div className={styles["reportFirst__graph"]}>
        <p className={styles["reportFirst__graph-title"]}>{data.graph.title}</p>
        <HorizontalScroll>
          <Image src={data.graph.img} alt="graph" />
        </HorizontalScroll>
      </div>
      <div className={styles["reportFirst__options"]}>
        {data.options.map((item: any, index: any) => (
          <div key={index} className={styles["reportFirst__options-item"]}>
            <p className={styles["reportFirst__options-title"]}>{item.title}</p>
            <ul className={styles["reportFirst__options-text"]}>
              {item.text.map((listItem: any, indexList: any) => (
                <li key={indexList}>{listItem}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles["reportFirst__text"]}>{data.text}</div>
    </section>
  );
};

export default ReportFirst;
