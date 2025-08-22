import Header from "../components/layout/Header";
import HomeScss from "./Home.module.scss";
import { useNavigate } from "react-router-dom";

export default function Home() {
  // 경로 전달 함수 선언
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className={HomeScss.page}>
        <div className={HomeScss.page__container}>
          {/* css 모듈 방식으로 클래스 적용 */}
          <div className={HomeScss.page__container__contents}>
            <div className={HomeScss.comment}>Welcome to</div>
            <div className={HomeScss.title}>SUGAR TOWN</div>
            <div className={HomeScss.menu}>
              <button
                className={HomeScss.start}
                onClick={() => handleNavigation("/login")}
              >
                START
              </button>
              <button
                className={HomeScss.play}
                onClick={() => handleNavigation("/gamelist")}
              >
                PLAY
              </button>
              <button
                className={HomeScss.info}
                onClick={() => handleNavigation("/gamelist")}
              >
                INFO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
