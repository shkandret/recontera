import { useRef, useEffect, useState } from "react";

import Image from "next/image";

import useOnScreen from "@/hooks/useOnScreen";

import styles from "./Principle.module.scss";
interface PrincipleProps {
  data: any;
}

const Principle: React.FC<PrincipleProps> = ({ data }) => {
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
      className={`${styles["principle"]} ${
        isVisible ? styles["principle-active"] : "hidden"
      }`}
    >
      <p className={styles["principle__title"]}>{data.title}</p>
      <div className={styles["principle__text"]}>{data.text}</div>
    </section>
  );
};

export default Principle;
