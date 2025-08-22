import BookMarkBtnScss from "./BookMark_Button.module.scss";
import { useNavigate } from "react-router-dom";

export default function BookMark_Button() {
  // 하나로 퉁치는 경로 설정 함수 선언
  const navigate = useNavigate();
  const handleNavigation = (path: string) => {
    navigate(path);
  };
  return (
    <div className="page">
      <div className="btn">
        <button
          onClick={() => handleNavigation("/creatorhomepage")}
          className={`${BookMarkBtnScss.custom} ${BookMarkBtnScss.creatorhomebtn}`}
        >
          홈
        </button>
        <button
          onClick={() => handleNavigation("/postpage")}
          className={`${BookMarkBtnScss.custom} ${BookMarkBtnScss.postbtn}`}
        >
          게시물
        </button>
        <button
          onClick={() => handleNavigation("/guestbookpage")}
          className={`${BookMarkBtnScss.custom} ${BookMarkBtnScss.guestbookbtn}`}
        >
          방명록
        </button>
        <button
          onClick={() => handleNavigation("/myroompage")}
          className={`${BookMarkBtnScss.custom} ${BookMarkBtnScss.myroombtn}`}
        >
          마이룸
        </button>
      </div>
    </div>
  );
}
