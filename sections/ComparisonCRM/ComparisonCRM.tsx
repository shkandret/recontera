import React, { useRef, useEffect, useState } from "react";

import useOnScreen from "@/hooks/useOnScreen";
import ComparisonTable from "@/components/ComparisonTable";
import Button from "@/components/Button";

import styles from "./ComparisonCRM.module.scss";

interface ComparisonCRMProps {
  data: any;
}

const ComparisonCRM: React.FC<ComparisonCRMProps> = ({ data }) => {
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
      id="comparisonCRM"
      className={`${styles["comparisonCRM"]} ${
        isVisible ? styles["comparisonCRM-active"] : "hidden"
      }`}
    >
      <p className={styles["comparisonCRM__title"]}>{data.title}</p>
      <ComparisonTable data={data} />
      <Button text={data.button.text} url={data.button.url} />
    </section>
  );
};

export default ComparisonCRM;
