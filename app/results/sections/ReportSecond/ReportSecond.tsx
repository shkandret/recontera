import { useRef, useEffect, useState } from "react";

import Image from "next/image";

import useOnScreen from "@/hooks/useOnScreen";

import HorizontalScroll from "@/components/HorizontalScroll";

import styles from "./ReportSecond.module.scss";

interface ReportSecondProps {
  data: any;
}

const ReportSecond: React.FC<ReportSecondProps> = ({ data }) => {
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
      className={`${styles["reportSecond"]} ${
        isVisible ? styles["reportSecond-active"] : "hidden"
      }`}
    >
      <p className={styles["reportSecond__title"]}>{data.title}</p>
      <p className={styles["reportSecond__subtitle"]}>{data.subtitle}</p>

      <div className={styles["reportSecond__table"]}>
        <div className={styles["reportSecond__table-title"]}>
          {data.tablePromotion.title}
        </div>
        <HorizontalScroll>
          <div className={styles["reportSecond__table-content"]}>
            <div className={styles["reportSecond__table-stroke"]} style={{backgroundColor: "#FF563F3D"}} />
            {data.tablePromotion.table.map((item: any, index: number) =>
              index === 0 ? (
                <div
                  key={index}
                  className={styles["reportSecond__table-header"]}
                >
                  {item.map((hItem: any, hIndex: number) => (
                    <div
                      key={hIndex}
                      className={styles["reportSecond__table-header--item"]}
                    >
                      {hItem}
                    </div>
                  ))}
                </div>
              ) : (
                <div key={index} className={styles["reportSecond__table-row"]}>
                  <div className={styles["reportSecond__table-row--header"]}>
                    {item[0]}
                  </div>
                  {item.slice(1).map((rItem: any, rIndex: number) => (
                    <div
                      key={rIndex}
                      className={styles["reportSecond__table-row--item"]}
                    >
                      {rItem}
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
        </HorizontalScroll>
      </div>

      <div className={styles["reportSecond__table"]}>
        <div className={styles["reportSecond__table-title"]}>
          {data.tableAppeals.title}
        </div>
        <HorizontalScroll>
          <div className={styles["reportSecond__table-content"]}>
            <div
              className={styles["reportSecond__table-stroke"]}
              style={{ backgroundColor: "#9DDCFF" }}
            />
            {data.tableAppeals.table.map((item: any, index: number) =>
              index === 0 ? (
                <div
                  key={index}
                  className={styles["reportSecond__table-header"]}
                >
                  {item.map((hItem: any, hIndex: number) => (
                    <div
                      key={hIndex}
                      className={styles["reportSecond__table-header--item"]}
                    >
                      {hItem}
                    </div>
                  ))}
                </div>
              ) : (
                <div key={index} className={styles["reportSecond__table-row"]}>
                  <div className={styles["reportSecond__table-row--header"]}>
                    {item[0]}
                  </div>
                  {item.slice(1).map((rItem: any, rIndex: number) => (
                    <div
                      key={rIndex}
                      className={styles["reportSecond__table-row--item"]}
                    >
                      {rItem}
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
        </HorizontalScroll>
      </div>

      <div className={styles["reportSecond__graph"]}>
        <p className={styles["reportSecond__graph-title"]}>
          {data.graph.title}
        </p>
        <HorizontalScroll>
          <Image src={data.graph.img} alt="graph" />
        </HorizontalScroll>
      </div>
      <div className={styles["reportSecond__options"]}>
        {data.options.map((item: any, index: any) => (
          <div key={index} className={styles["reportSecond__options-item"]}>
            <p className={styles["reportSecond__options-title"]}>
              {item.title}
            </p>
            <ul className={styles["reportSecond__options-text"]}>
              {item.text.map((listItem: any, indexList: any) => (
                <li key={indexList}>{listItem}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles["reportSecond__text"]}>{data.text}</div>
    </section>
  );
};

export default ReportSecond;
