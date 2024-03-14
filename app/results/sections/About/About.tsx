import { useRef, useEffect, useState } from "react";

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
      <p className={styles["about__title"]}>{data.title}</p>
      <p className={styles["about__text"]}>{data.text}</p>
    </section>
  );
};

export default About;
