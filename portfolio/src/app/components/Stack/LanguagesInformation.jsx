import style from "./languages.module.css";

const LanguagesInformation = () => {
  const languages = [
    { language: "Spanish", progress: 100 },
    { language: "English", progress: 90 },
    { language: "German", progress: 30 },
  ];
  return (
    <article className={style.languagesInformation}>
      <h2 className={style.languagesTitle}>Languages</h2>
      {languages.map((l, i) => {
        return (
          <div className={style.progressBar} key={l.language}>
            <h3>{l.language}</h3>
            <div className={style.barContainer}>
              <div className={style.progressBarBackground}></div>
              <div
                className={style.progressBarBar}
                style={{ width: `${l.progress}% ` }}
              ></div>
            </div>
          </div>
        );
      })}
    </article>
  );
};
export default LanguagesInformation;
