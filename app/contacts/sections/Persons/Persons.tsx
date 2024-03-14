import { useRef, useEffect, useState } from "react";

import Image from "next/image";

import useOnScreen from "@/hooks/useOnScreen";

import styles from "./Persons.module.scss";

interface PersonsProps {
  data: any;
}

const Persons: React.FC<PersonsProps> = ({ data }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const onScreen = useOnScreen(targetRef, 0.3);

  useEffect(() => {
    if (onScreen) {
      setIsVisible(true);
    }
  }, [onScreen]);

  return (
    <section className={styles["persons"]}>
      {data.persons.map((item: any, index: number) => (
        <div
          key={index}
          ref={targetRef}
          className={`${styles["persons__person"]} 
          ${
            index % 2 === 0
              ? isVisible
                ? styles["persons-left-to-right"]
                : "hidden"
              : isVisible
              ? styles["persons-right-to-left"]
              : "hidden"
          }`}
        >
          <Image src={item.photo} alt="photo" width={440} height={440} className={styles["persons__person-photo"]}/>
          <div>
            <p className={styles["persons__person-fullname"]}>
              {item.FullName}
            </p>
            <p className={styles["persons__person-text"]}>{item.text}</p>
            <div className={styles["persons__person-contacts"]}>
              <a href={`tel:${item.phone}`}>{item.phone}</a>
              <a href={`mailto:${item.email}`} className={styles["persons__person-email"]}>{item.email}</a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Persons;
