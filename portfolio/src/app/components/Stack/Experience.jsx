import style from "./stack.module.css";
import img from "../../../../public/oriana2.jpg";
import Image from "next/image";
import ContactInformation from "./ContactInformation";
import LanguagesInformation from "./LanguagesInformation";
import Education from "./Education";
import { experience, techList } from "./variables";

export default function Experience() {
  return (
    <div className={style.container}>
      <div className={style.backgroundCircle}></div>
      <div className={style.midCircle}></div>
      <div className={`${style.display} ${style.header}`}>
        <div className={style.profileImageContainer}>
          <Image className={style.profileImage} src={img} alt="orianita" />
          <div className={`${style.verticalLine} ${style.verticalLine1}`}></div>
          <div className={`${style.verticalLine} ${style.verticalLine2}`}></div>
          <div className={style.roleTitle}>Full-stack developer</div>
        </div>

        <div className={style.headerInfoContainer}>
          <div className={style.headerInfo}>
            <ContactInformation style={style} isMobile={true} />

            <div>
              <h1 className={style.title}>Oriana Pettinelli</h1>
            </div>
          </div>
          <p className={style.paragraph}>
            I&apos;m a driven and enthusiastic Full-Stack Developer currently
            pursuing my Bachelor&apos;s degree in Computer Science at the
            National University of Quilmes. With a strong passion for
            programming, computer science, and languages, I am eager to
            contribute my skills and knowledge to the world of software
            development.
          </p>
        </div>
      </div>
      <div className={style.display}>
        <div></div>
        <div className={style.techList}>
          {techList.map((tech, i) => {
            return (
              <div className="techItem" key={i}>
                {tech}
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.display}>
        <div style={{ width: "100%" }}>
          <ContactInformation style={style} />
          <Education />
          <LanguagesInformation />
        </div>

        <div>
          <h3 className={style.experienceTitle}>Experience</h3>
          {experience.map((ex, i) => {
            return (
              <div className={style.experience}>
                <div className={style.experienceDiv}>
                  <h4>{ex.name}</h4> <small>{ex.date}</small>
                </div>
                <p>{ex.description}</p>
                {ex.projects.map((proj) => {
                  return (
                    <div style={{ marginBottom: "32px" }}>
                      <h5>{proj.name}</h5>
                      <p>{proj.description}</p>

                      <ul>
                        {proj.items.map((item) => {
                          return <li>{item}</li>;
                        })}
                      </ul>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                          flexWrap: "wrap",
                        }}
                      >
                        {proj.technologies.map((t) => (
                          <small className={style.techItem}>{t}</small>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
