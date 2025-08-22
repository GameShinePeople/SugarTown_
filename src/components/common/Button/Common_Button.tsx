import CommonBtnScss from "./Common_Button.module.scss";

export default function Common_Button({ children, ...props }: CommonBtnProps) {
  return (
    <div>
      {/* // div는 style, type, onclik을 받아들이지 못해서 button으로 감싸줘야 함. */}
      <button className={CommonBtnScss.btn} {...props}>
        {children}
      </button>
    </div>
  );
}

// 스타일이나 이벤트, 버튼 제목 수정 가능하도록
type CommonBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};
