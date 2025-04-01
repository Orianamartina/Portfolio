import style from "./projectCard.module.css";
import image from "../../../../public/henry.png";
import Image from "next/image";
export const ProjectCard = ({
  name,
  description,
  repoUrl,
  url,
  technologies,
  id,
}) => {
  const colors = ["1", "2", "4", "5"];
  return (
    <div className={style.projectCard}>
      <h3 className={`${style.projectCardTitle} cursive`}>{name}</h3>
      <section
        className={`${id % 2 == 0 ? style.left : style.right} ${
          style.projectCardDescription
        }`}
      >
        {/* <Image src={image} className={style.projectImage} /> */}
        <p>{description}</p>
      </section>
      <section className={style.techContainer}>
        {technologies.map((t, i) => (
          <div
            className={`bg-${colors[Math.floor(i % 4)]} ${style.techItem}`}
            key={i}
          >
            {t}
          </div>
        ))}
      </section>
      <div className={style.urls}>
        {repoUrl && <a href={repoUrl}>Code</a>}
        {url && <a href={url}>Website</a>}
      </div>
    </div>
  );
};
