import ProfileBtnScss from "../Button/Profile_Button.module.scss";
import { useNavigate } from "react-router-dom";

export default function Profile_Button() {
  const navigate = useNavigate();
  const handleNavigation = (path: string) => {
    navigate(path);
  };
  return (
    <div>
      <button
        onClick={() => handleNavigation("/creatorhomepage")}
        className={`${ProfileBtnScss.custom} ${ProfileBtnScss.creatorhome}`}
      >
        작가홈
      </button>
      <button
        onClick={() => handleNavigation("/postpage")}
        className={`${ProfileBtnScss.custom} ${ProfileBtnScss.introduce}`}
      >
        게시물
      </button>
      <button
        onClick={() => handleNavigation("/guestbookpage")}
        className={`${ProfileBtnScss.custom} ${ProfileBtnScss.guestbook}`}
      >
        방명록
      </button>
      <button
        onClick={() => handleNavigation("/myroompage")}
        className={`${ProfileBtnScss.custom} ${ProfileBtnScss.diary}`}
      >
        마이룸
      </button>
    </div>
  );
}
