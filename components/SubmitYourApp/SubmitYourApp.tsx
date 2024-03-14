import React, { useRef, useEffect, useState } from "react";

import Link from "next/link";
import useOnScreen from "@/hooks/useOnScreen";

import Button from "@/components/Button";
import styles from "./SubmitYourApp.module.scss";

interface ButtonItems {
  text: string;
  url: string;
}

interface ConsentItems {
  text: any;
  link: any;
}

interface SubmitYourAppItems {
  title: string;
  subtitle: string;
  button: ButtonItems;
  consent: ConsentItems;
}

interface SubmitYourAppProps {
  data: SubmitYourAppItems;
}

const SubmitYourApp: React.FC<SubmitYourAppProps> = ({ data }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const onScreen = useOnScreen(targetRef, 0.3);

  useEffect(() => {
    if (onScreen) {
      setIsVisible(true);
    }
  }, [onScreen]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch(
        "https://fronde.ru/ajax/send_form_recontera.php",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        alert("Спасибо за вашу заявку!");
      } else {
        alert("Произошла ошибка при отправке формы.");
      }
    } catch (error) {
      alert("Произошла ошибка при отправке формы.");
    }
  };

  return (
    <section
      ref={targetRef}
      id="submitYourApp"
      className={styles["submitYourApp"]}
    >
      <div className={styles["submitYourApp__wrapper"]}>
        <div
          className={`${styles["submitYourApp__text"]} ${
            isVisible ? styles["submitYourApp__text-active"] : "hidden"
          }`}
        >
          <p className={styles["submitYourApp__title"]}>{data.title}</p>
          <p className={styles["submitYourApp__subtitle"]}>{data.subtitle}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={
            isVisible ? styles["submitYourApp__form-active"] : "hidden"
          }
          action="https://fronde.ru/ajax/send_form_recontera.php"
          method="post"
        >
          <div className={styles["submitYourApp__form-wrapper"]}>
            <input
              type="text"
              name="name"
              placeholder="Имя"
              className={styles["submitYourApp__form-input"]}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Телефон"
              className={styles["submitYourApp__form-input"]}
              required
            />
            <input
              type="msg"
              name="msg"
              placeholder="Комментарий"
              className={styles["submitYourApp__form-input"]}
              required
            />
            <label className={styles["submitYourApp__form-consent"]}>
              {data.consent.text}
              <Link href="/" className="text-primary-orange">
                {data.consent.link}
              </Link>
            </label>
          </div>
          <Button text={data.button.text} url={data.button.url} type="submit" />
        </form>
      </div>
    </section>
  );
};

export default SubmitYourApp;
