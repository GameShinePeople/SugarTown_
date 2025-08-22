import PageScss from "./Page.module.scss";

export default function Page() {
  return (
    <div>
      <div className="page">
        <div className={PageScss.page}></div>
      </div>
    </div>
  );
}
