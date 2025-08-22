import Header from "../components/layout/Header";
import Page from "../components/layout/Page";
// import CreatorPostFrame from "../../components/mypage/creator/CreatorPostFrame";
import Title from "./MyPage/MyPageTitle.module.scss";

export default function GameListPage() {
  return (
    <div>
      <Header />
      <div className="page">
        <Page />
        <div className={Title.title}>• 게임 리스트</div>
        <div className="page__container">
          <div className="page__container__contents"></div>
        </div>
      </div>
    </div>
  );
}
