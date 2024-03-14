import Link from "next/link";

import styles from "./ComparisonTable.module.scss";

interface ComparisonTableRow {
  title: string;
  subtitle: string;
}

interface ComparisonTableProps {
  data: {
    table_first: string;
    table_second: string;
    table_third: string;
    tableCRM: ComparisonTableRow[];
  };
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ data }) => (
  <div id="comparisonCRMTable" className={styles["comparisonCRM__table"]}>
    <div className={styles["comparisonCRM__table-header"]}>
      <div style={{ marginRight: "703px" }}>{data.table_first}</div>
      <div style={{ marginRight: "120px" }}>{data.table_second}</div>
      <div>{data.table_third}</div>
    </div>
    <div className={styles["comparisonCRM__table-content"]}>
      {data.tableCRM.map((content: any, index: number) => (
        <div key={index} className={styles["comparisonCRM__table-row"]}>
          <div className={styles["comparisonCRM__table-title"]}>
            {content.title}
            <p className={styles["comparisonCRM__table-subtitle"]}>
              {content.subtitle}
            </p>
          </div>
          <div className={styles["comparisonCRM__table-differences"]}>
            <div className={styles["comparisonCRM__table-wrapper"]}>
              <p className={styles["comparisonCRM__table-mobile"]}>
                {data.table_first}
              </p>
              <p className={styles["comparisonCRM__table-yes"]}>Есть</p>
            </div>
            <div className={styles["comparisonCRM__table-wrapper"]}>
              <p className={styles["comparisonCRM__table-mobile"]}>
                {data.table_second}
              </p>
              <p className={styles["comparisonCRM__table-no"]}>Нет</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ComparisonTable;
