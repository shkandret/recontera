import React, { useRef, useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import useOnScreen from "@/hooks/useOnScreen";

import FooterItem from "../FooterItem";

import styles from "./Footer.module.scss";

interface MenuItem {
  links: any;
}

interface MessengerItems {
  icon: any;
  link: string;
}

interface FooterItems {
  logo: any;
  whatsapp: MessengerItems;
  telegram: MessengerItems;
  menu: MenuItem[];
  privacyPolicy: {
    text: string;
    link: string;
  };
}

interface FooterProps {
  data: FooterItems;
  phone: string;
  email: string;
}

const Footer: React.FC<FooterProps> = ({ data, phone, email }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const onScreen = useOnScreen(targetRef, 0.1);

  useEffect(() => {
    if (onScreen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [onScreen]);

  return (
    <footer
      ref={targetRef}
      id="footer"
      className={`${styles["footer"]} ${
        isVisible ? styles["footer-active"] : "hidden"
      }`}
    >
      <div className={styles["footer__wrapper"]}>
        <div className={styles["footer__links"]}>
          <Link href="/" className={styles["footer__logo"]}>
            <Image src={data.logo} alt="logo" width={91} height={32} />
          </Link>
          <div className={styles["footer__links-contacts"]}>
            <Link href={"tel:" + phone} className={styles["footer__item"]}>{phone}</Link>
            <Link href={"mailto:" + email} className={styles["footer__item"]}>
              {email}
            </Link>
            <div className={styles["footer__social"]}>
              <Link
                href={data.whatsapp.link}
                type="button"
                className={styles["footer__item"]}
              >
                <Image
                  src={data.whatsapp.icon}
                  alt="whatsapp"
                  width={40}
                  height={40}
                />
              </Link>
              <Link
                href={data.whatsapp.link}
                type="button"
                className={styles["footer__item"]}
              >
                <Image
                  src={data.telegram.icon}
                  alt="telegram"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>
          <div className={styles["footer__menu"]}>
            {data.menu.map((item: MenuItem, index: number) => (
              <div className={styles["footer__menu-column"]} key={index}>
                {item.links.map((link: any, linkIndex: number) => (
                  <FooterItem
                    key={linkIndex}
                    name={link.title}
                    link={link.url}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className={styles["footer__copyright"]}>
          <Link href={data.privacyPolicy.link}>{data.privacyPolicy.text}</Link>
          <p className={styles["footer__copyright-rights"]}>
            © 2023 Реконтера, все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
