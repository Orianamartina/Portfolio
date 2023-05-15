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
            
            <h1 className={style.title}>Experience</h1>
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
            <div className={style.bigImgContainer}>
                <img className={style.imgBig} src={henry.src} alt="henry" />
                <img className={style.imgBig} src={english.src} alt="english" />
            </div>
               
        </div>
    )
}