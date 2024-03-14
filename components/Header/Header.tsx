import Image from "next/image";
import Link from "next/link";

import HeaderItem from "../HeaderItem";

import styles from "./Header.module.scss";

interface MenuItem {
  name: any;
  link: string;
}

interface HeaderItems {
  logo: any;
  burger: any;
  menu: MenuItem[];
}

interface HeaderProps {
  data: HeaderItems;
  phone: string;
}

const Header: React.FC<HeaderProps> = ({ data, phone }) => {
  const handleClick = () => {
    document.querySelector("#burger")?.classList.toggle("burger-active");
  };

  return (
    <header className={`${styles["header"]} ${styles["headerDown"]}`}>
      <nav className={styles["header__nav"]}>
        <Link href="/" className={styles["header__logo"]}>
          <Image
            src={data.logo}
            alt="logo"
            className={styles["header__logo-image"]}
          />
        </Link>

        <ul
          className={`${styles["header__menu"]} ${styles["header__menu-center"]}`}
        >
          {data.menu.map((item, index) => (
            <li key={index}>
              <HeaderItem name={item.name} link={item.link} />
            </li>
          ))}
        </ul>

        <div className={styles["header__menu-phone"]}>
          <HeaderItem name={phone} link={"tel:" + phone} />
        </div>
        <div onClick={handleClick} className={styles["header__menu-burger"]}>
          <HeaderItem
            link=""
            name={<Image src={data.burger} alt="burger" />}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
