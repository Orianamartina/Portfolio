import style from "./stack.module.css"
import Image from "next/image"
import html from "../../../../public/html.png"
import css from "../../../../public/css.png"
import javascript from "../../../../public/javascript.png"
import node from "../../../../public/node.png"
import python from "../../../../public/python.png"
import react from "../../../../public/react.png"
import next from "../../../../public/next.png"
import redux from "../../../../public/redux.png"
import sequelize from "../../../../public/sequelize.png"
import postgres from "../../../../public/postgres.png"
import git from "../../../../public/git.png"
import github from "../../../../public/github.png"
import henry from "../../../../public/henry.png"
import english from "../../../../public/english.png"

export default function Experience(){
 
    return(
        <div className={style.container}>
            
            <h1 className={style.title}>Experience and skills</h1>
            <div className={style.imgContainer}>
                <img className={style.img} src={html.src} alt="html" />
                <img className={style.img} src={css.src} alt="css" />
                <img className={style.img} src={javascript.src} alt="javascript" />
                <img className={style.img} src={node.src} alt="node" />
                <img className={style.img} src={python.src} alt="python" />
                <img className={style.img} src={react.src} alt="react" />
                <img className={style.img} src={next.src} alt="next" />
                <img className={style.img} src={redux.src} alt="redux" />
                <img className={style.img} src={sequelize.src} alt="sequelize" />
                <img className={style.img} src={postgres.src} alt="postgres" />
                <img className={style.img} src={git.src} alt="git" />
                <img className={style.img} src={github.src} alt="github" />
               
            </div> 
            <div className={style.circle}></div>
            <div className={style.circle2}></div>

            <div className={style.expContainer}>
                    <h2>Henry Bootcamp</h2>
                    <h3>2023</h3>
                    <h3>
                    During the four-month bootcamp, I delved into Node.js, React, Redux, Sequelize, Express, and MySQL, completing an individual project and a final group project using Scrum methodologies. With approximately 700 hours of dedicated learning, I gained comprehensive full-stack web development skills and experienced real-world challenges. Mentored by industry professionals, 
                    I emerged equipped with newfound knowledge, resilience, and passion for web development.
                    </h3>
            </div>
            <div className={style.bigImgContainer}>

                <a href="https://certificates.soyhenry.com/new-cert?id=d6cb42c7273f109dbb42d68b4b9e10c0ac6942d7335adebefd564c998198980b"          target="_blank">
                <img className={style.imgBig} src={henry.src} alt="henry" />
                </a>
                <a href="https://efset.org/cert/1X3aht"          target="_blank">  <img className={style.imgBig} src={english.src} alt="english" /> </a>
    
               
            </div>
               
        </div>
    )
}