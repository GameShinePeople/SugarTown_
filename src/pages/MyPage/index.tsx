import Header from "../../components/layout/Header";
import CreatorProfile from "../../components/mypage/creator/CreatorProfile";
import Page from "../../components/layout/Page";
import IndexScss from "./index.module.scss";
import CommonBtn from "../../components/common/Button/Common_Button";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  const handleNavigation = (path: string) => {
    return navigate(path);
  };
  return (
    <div>
      <Header />
      <div className="page">
        <Page />
        <div className="page__container">
          <CreatorProfile />
          <div className="page__container__contents">
            {/* 여기는 나중에 */}
            <div className={IndexScss.title}>김아무개 TOWN</div>
            <div>
              <div className={IndexScss.box}>
                <CommonBtn
                  onClick={() => handleNavigation("/mypageedit")}
                  style={{
                    color: "#ffffff",
                    fontWeight: "bold",
                    left: "32px",
                    bottom: "20px",
                    width: "160px",
                  }}
                >
                  프로필 수정
                </CommonBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
