import Image from "next/image";

import Button from "@/components/Button";

import styles from "./CardAdvantages.module.scss";

interface ButtonItems {
  text: string;
  url: string;
}

interface CardAdvantagesProps {
  number: string;
  icon: any;
  textFirst: any;
  textSecond: any;
  button: ButtonItems;
}

const CardAdvantages: React.FC<CardAdvantagesProps> = ({
  number,
  icon,
  textFirst,
  textSecond,
  button,
}) => (
  <div className={styles["advantages__card"]}>
    <div className={styles["advantages__card-text"]}>
      <div className={styles["advantages__card-text-first"]}>{textFirst}</div>
      <div className={styles["advantages__card-text-second"]}>{textSecond}</div>
      <div className={styles["advantages__card-button"]}>
        <Button text={button.text} url={button.url} />
      </div>
    </div>
    <Image src={icon} alt="bg" className={styles["advantages__card-image"]} />
    <p className={styles["advantages__card-num"]}>{number}</p>
  </div>
);

export default CardAdvantages;
