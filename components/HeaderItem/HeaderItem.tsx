import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./HeaderItem.module.scss";

interface HeaderItemProps {
  name: any;
  link: string;
}

const HeaderItem: React.FC<HeaderItemProps> = ({ name, link }) => {
  const pathname = usePathname();
  if (pathname == link) {
    return (
      <Link
        className={styles["headeritem"]}
        href={`${link}`}
        style={{ opacity: "0.5" }}
      >
        {name}
      </Link>
    );
  } else {
    return (
      <Link className={styles["headeritem"]} href={`${link}`}>
        {name}
      </Link>
    );
  }
};

export default HeaderItem;

{
  /* <Link className={styles["headeritem"]} href={`${link}`}>{name}</Link> */
}
