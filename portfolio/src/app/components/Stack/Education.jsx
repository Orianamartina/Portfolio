import { educationItems } from "./variables";
import style from "./education.module.css";
const Education = () => {
  return (
    <section className={style.educationContainer}>
      <h3 className={style.educationTitle}>Education</h3>
      {educationItems.map((ed) => {
        return (
          <div className={style.educationItem} key={ed.name}>
            <h4>{ed.name}</h4>
            <h5>{ed.place}</h5>
            <small>{ed.date}</small>
          </div>
        );
      })}
    </section>
  );
};

export default Education;
