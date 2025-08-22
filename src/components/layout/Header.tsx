import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const handleNavigation = (path: string) => {
    navigate(path);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}></div>
      <div className={styles.title} onClick={() => handleNavigation("/home")}>
        SUGAR TOWN
      </div>
      <div className={styles.icon}></div>
    </div>
  );
}
