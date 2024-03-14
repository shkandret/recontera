import HorizontalScroll from "@/components/HorizontalScroll";

import styles from "./TotalClientsTable.module.scss";

interface TableItem {
  header: string;
  number: string;
  subnumber?: string;
}

interface TotalClientsTableItems {
  title: string;
  table: TableItem[];
}

interface TotalClientsTableProps {
  data: TotalClientsTableItems;
}

const TotalClientsTable: React.FC<TotalClientsTableProps> = ({ data }) => (
  <div className={styles["table"]}>
    <div className={styles["table__header"]}>{data.title}</div>
    <HorizontalScroll>
      <div className={styles["table__content"]}>
        <div className={styles["table__stroke"]} />
        {data.table.map((item, index) => (
          <div className={styles["table__row"]} key={index}>
            <div className={styles["table__row-header"]}>{item.header}</div>
            <div className={styles["table__row-item"]}>
              <p className={styles["table__row-item--number"]}>{item.number}</p>
              {item.subnumber && (
                <p className={styles["table__row-item--subnumber"]}>
                  {item.subnumber}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </HorizontalScroll>
  </div>
);

export default TotalClientsTable;
