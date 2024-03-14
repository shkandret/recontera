import { useRef, useEffect, useState } from "react";

import useOnScreen from "@/hooks/useOnScreen";

import CardBenefits from "@/components/CardBenefits";

import styles from "./Benefits.module.scss";

interface CardBenefitsItem {
  icon: any;
  text: string;
}

interface BenefitsItems {
  title: string;
  text: any;
  subtext: any;
  cardBenefits: CardBenefitsItem[];
}

interface BenefitsProps {
  data: BenefitsItems;
}

const Benefits: React.FC<BenefitsProps> = ({ data }) => {
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
      id="benefits"
      className={`${styles["benefits"]} ${isVisible ? "" : "hidden"}`}
    >
      <p
        className={`${styles["benefits__title"]} ${
          isVisible ? styles["benefits__title-active"] : "hidden"
        }`}
      >
        {data.title}
      </p>
      <p
        className={`${styles["benefits__text"]} ${
          isVisible ? styles["benefits__text-active"] : "hidden"
        }`}
      >
        {data.text}
      </p>
      <ul
        className={`${styles["benefits__cards"]} ${
          isVisible ? styles["benefits__cards-active"] : "hidden"
        }`}
      >
        {data.cardBenefits.map((cardContent, index) => (
          <li key={index}>
            <CardBenefits {...cardContent} />
          </li>
        ))}
      </ul>
      <p
        className={`${styles["benefits__subtext"]} ${
          isVisible ? styles["benefits__subtext-active"] : "hidden"
        }`}
      >
        {data.subtext}
      </p>
    </section>
  );
};

export default Benefits;
