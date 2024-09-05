import styles from "./Header.module.css";
import LogoToDo from "../assets/logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={LogoToDo} alt="Logo do To-Do-List" />
    </header>
  );
}
