import { useRef, useEffect, useState } from "react";

import Image from "next/image";

import useOnScreen from "@/hooks/useOnScreen";

import styles from "./About.module.scss";

interface ContactItem {
  title: string;
  text: string;
}

interface AboutData {
  title: string;
  contacts: {
    phone: string;
    contact: ContactItem[];
  };
}

interface AboutProps {
  data: AboutData;
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
      <div className={styles["about__contact"]}>
        <a
          href={`tel:${data.contacts.phone}`}
          className={styles["about__contact-phone"]}
        >
          {data.contacts.phone}
        </a>
        <div className={styles["about__contact-contacts"]}>
          {data.contacts.contact.map((item: any, index: number) => (
            <div key={index}>
              <p className={styles["about__contact-title"]}>{item.title}</p>
              <a
                href={`mailto:${item.text}`}
                className={styles["about__contact-text"]}
              >
                {item.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
