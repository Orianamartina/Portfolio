import style from "./home.module.css";
import img from "../../../../public/oriana2.jpg";
import Image from "next/image";
import { LinkedinIcon } from "../Icons/LinkedinIcon";
import { GithubIcon } from "../Icons/GithubIcon";
import { CopyIcon } from "../Icons/CopyIcon";
import { GitlabIcon } from "../Icons/GitlabIcon";
import { EnvelopeIcon } from "../Icons/EnvelopeIcon";
import { useState } from "react";

export default function Home() {
  const [mail, setMail] = useState(false);
  const showMail = () => {
    setMail(!mail);
  };

  const handleCopy = async () => {
    await window.navigator.clipboard.writeText("orianapettinelli1@gmail.com");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <div className={style.homeContainer}>
        <div className={style.circle1}></div>
        <div className={style.circle2}></div>
        <div className={style.main}>
          <div className={style.infoContainer}>
            <h1 className={style.title}>Oriana Pettinelli</h1>
            <h2 className={style.subtitle}>Full-stack developer</h2>
            <a
              className={style.downloadButton}
              download={true}
              href="/ORIANA PETTINELLI cv INGLES.pdf"
              target="_blank"
            >
              Download Resume
            </a>
            <div className={style.linksContainer}>
              <a
                href="https://www.linkedin.com/in/oriana-pettinelli-777a09268/"
                target="_blank"
              >
                <LinkedinIcon />
              </a>
              <a href="https://github.com/Orianamartina" target="_blank">
                <GithubIcon />
              </a>
              <a href="https://gitlab.com/Orianamartina" target="_blank">
                <GitlabIcon />
              </a>
              <div className={style.copyMailContainer}>
                <div onClick={showMail}>
                  <EnvelopeIcon style={{ cursor: "pointer" }} />
                </div>
                {mail && (
                  <div className={style.copyMail}>
                    <p>orianapettinelli1@gmail.com</p>
                    <div onClick={handleCopy}>
                      <CopyIcon
                        className={style.copyMailIcon}
                        fill="var(--3)"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={style.profileImageContainer}>
            <Image className={style.profileImage} src={img} alt="orianita" />
          </div>
        </div>
      </div>
    </div>
  );
}
