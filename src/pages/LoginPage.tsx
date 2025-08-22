import Header from "../components/layout/Header";
import LoginScss from "./LoginPage.module.scss";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const handleNavigation = (path: string) => {
    navigate(path);
  };
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className={LoginScss.page}>
        <div className={LoginScss.title}>SUGAR TOWN</div>
        <div className={LoginScss.page__container}>
          <div className={LoginScss.img}></div>
          <button
            className={LoginScss.kakao}
            onClick={() => handleNavigation("/index")}
          >
            카카오로 로그인하기
          </button>
          <button
            className={LoginScss.google}
            onClick={() => handleNavigation("/index")}
          >
            Google로 시작하기
          </button>
        </div>
      </div>
    </div>
  );
}
