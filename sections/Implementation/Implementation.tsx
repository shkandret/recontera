import React, { useRef, useEffect, useState } from "react";

import Image from "next/image";
import useOnScreen from "@/hooks/useOnScreen";

import Button from "@/components/Button";

import styles from "./Implementation.module.scss";

interface ButtonItems {
  text: string;
  url: string;
}

interface CompanyInfoItems {
  logo: any;
  numberRepresentative: number;
  numberStaff: number;
  text: any;
  button: ButtonItems;
}

interface ImplementationItems {
  title: string;
  text: any;
  companyInfo: CompanyInfoItems;
}

interface ImplementationProps {
  data: ImplementationItems;
}

const Implementation: React.FC<ImplementationProps> = ({ data }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const onScreen = useOnScreen(targetRef, 0.2);

  useEffect(() => {
    if (onScreen) {
      setIsVisible(true);
    }
  }, [onScreen]);

  return (
    <section
      ref={targetRef}
      id="implementation"
      className={`${styles["implementation"]} ${
        isVisible ? styles["implementation-active"] : "hidden"
      }`}
    >
      <p className={styles["implementation__title"]}>{data.title}</p>
      <div className={styles["implementation__content"]}>
        <div className={styles["implementation__company"]}>
          <div className={styles["implementation__company-info"]}>
            <div>
              <p className={styles["implementation__company-info-num"]}>
                {data.companyInfo.numberRepresentative}
              </p>
              <p className={styles["implementation__company-info-text"]}>
                торговых <br />
                представителей
              </p>
            </div>
            <div>
              <p className={styles["implementation__company-info-num"]}>
                {data.companyInfo.numberStaff}
              </p>
              <p className={styles["implementation__company-info-text"]}>
                сотрудников офисных <br />
                продаж в 20 филиалах
              </p>
            </div>
          </div>
          <div className={styles["implementation__company-about"]}>
            <Image
              src={data.companyInfo.logo}
              alt="martinex"
              width={236}
              height={30}
            />
            <p className={styles["implementation__company-about-text"]}>
              {data.companyInfo.text}
            </p>
          </div>
        </div>
        <p className={styles["implementation__text"]}>{data.text}</p>
        <div className={styles["implementation__btn"]}>
          <Button text={data.companyInfo.button.text} url={data.companyInfo.button.url} />
        </div>
      </div>
    </section>
  );
};

export default Implementation;
