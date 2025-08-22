import CreatorProfileScss from "./CreatorProfile.module.scss";
import ProfileBtn from "../../../components/common/Button/Profile_Button";
export default function CreatorProfile() {
  return (
    <div>
      <div className="page">
        <div className={CreatorProfileScss.page__container}>
          <div className={CreatorProfileScss.page__container__contents}>
            <div
              className={CreatorProfileScss.page__container__contents__profile}
            ></div>
            <div className={CreatorProfileScss.tag}>@nonamed</div>
            <ProfileBtn />
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
