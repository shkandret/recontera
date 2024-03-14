import Link from "next/link";
import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  url?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ text, url = "/", type = "button" }) =>
  type === "button" ? (
    <Link href={url}>
      <button className={styles.button}>{text}</button>
    </Link>
  ) : (
    <input className={styles.button} type={type} value={text} />
  );

export default Button;
