import PostFrameScss from "./CreatorPostFrame.module.scss";
import BookMarkBtn from "../../common/Button/BookMark_Button";

export default function CretorPostFrame() {
  return (
    <div className={PostFrameScss.page}>
      <div className={PostFrameScss.page__container}>
        <div className={PostFrameScss.page__container__contents}>
          <BookMarkBtn />
        </div>
      </div>
    </div>
  );
}
