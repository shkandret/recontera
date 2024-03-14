import Image from "next/image";
import Link from "next/link";

import styles from "./Burger.module.scss";

import BurgerItem from "../BurgerItem";

interface MessengerItems {
  icon: any;
  link: string;
}

interface MenuItem {
  name: any;
  link: string;
}

interface BurgerItems {
  logo: any;
  close: any;
  menu: MenuItem[];
  whatsapp: MessengerItems;
  telegram: MessengerItems;
}

interface BurgerProps {
  data: BurgerItems;
  phone: string;
  email: string;
}

const Burger: React.FC<BurgerProps> = ({ data, phone, email }) => {
  const handleClick = () => {
    document.querySelector("#burger")?.classList.toggle("burger-active");
  };

  return (
    <div id="burger" className={styles["burger"]}>
      <div className={styles["burger__wrapper"]}>
        <div className={styles["burger__header"]}>
          <Link href="/" className={styles["burger__header-logo"]}>
            <Image
              src={data.logo}
              alt="logo"
              width={90}
              height={32}
              className={styles["burger__header-image"]}
            />
          </Link>
          <button onClick={handleClick}>
            <Image src={data.close} alt="close" width={20} height={20} />
          </button>
        </div>
        <ul className={styles["burger__menu"]}>
          {data.menu.map((item, index) => (
            <li key={index}>
              <BurgerItem name={item.name} link={item.link} />
            </li>
          ))}
        </ul>
        <div className={styles["burger__footer"]}>
          <div className={styles["burger__footer-phone"]}>
            <BurgerItem name={phone} link={"tel:" + phone} />
          </div>
          <div className={styles["burger__footer-email"]}>
            <BurgerItem name={email} link={"mailto:" + email} />
          </div>
          <div className={styles["burger__footer-social"]}>
            <Link href={data.whatsapp.link} type="button">
              <Image
                src={data.whatsapp.icon}
                alt="whatsapp"
                width={40}
                height={40}
              />
            </Link>
            <Link href={data.telegram.link} type="button">
              <Image
                src={data.telegram.icon}
                alt="telegram"
                width={40}
                height={40}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Burger;
