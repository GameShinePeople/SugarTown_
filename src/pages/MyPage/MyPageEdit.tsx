import Header from "../../components/layout/Header";
import Page from "../../components/layout/Page";
// import CreatorPostFrame from "../../components/mypage/creator/CreatorPostFrame";
import Title from "./MyPageTitle.module.scss";

export default function MyRoomPage() {
  return (
    <div>
      <Header />
      <div className="page">
        <Page />
        <div className={Title.title}>• 프로필 수정</div>
        <div className="page__container">
          <div className="page__container__contents"></div>
        </div>
      </div>
    </div>
  );
}
