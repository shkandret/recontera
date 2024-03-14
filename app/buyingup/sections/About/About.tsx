import { useRef, useEffect, useState } from "react";

import Image from "next/image";

import useOnScreen from "@/hooks/useOnScreen";

import styles from "./About.module.scss";
interface AboutProps {
  data: any;
}

const About: React.FC<AboutProps> = ({ data }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  const onScreen = useOnScreen(targetRef, 0.3);

  useEffect(() => {
    if (onScreen) {
      setIsVisible(true);
    }
  }, [onScreen]);

  return (
    <section
      ref={targetRef}
      className={`${styles["about"]} ${
        isVisible ? styles["about-active"] : "hidden"
      }`}
    >
      <div className={styles["about__title"]}>{data.title}</div>
      <div className={styles["about__text"]}>{data.text}</div>
    </section>
  );
};

export default About;
