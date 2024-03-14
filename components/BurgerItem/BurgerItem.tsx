import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./BurgerItem.module.scss";

interface BurgerItemProps {
  name: any;
  link: string;
}

const BurgerItem: React.FC<BurgerItemProps> = ({ name, link }) => {
  const pathname = usePathname();
  if (pathname == link) {
    return (
      <Link href={`${link}`} style={{ opacity: "0.5" }}>
        {name}
      </Link>
    );
  } else {
    return <Link href={`${link}`}>{name}</Link>;
  }
};

export default BurgerItem;
