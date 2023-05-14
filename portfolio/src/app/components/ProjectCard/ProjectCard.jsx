"use Client"
import style from "./projectCard.module.css"
import { useState } from "react"
export default function ProjectCard(props){
    
    const [clickFlag, setClickFlag] = useState(false)


    

    return(
        <div className={style.container}>
            <div className={style.allInfoContainer}>
                <div className={clickFlag? style.titleAndImageClicked: style.titleAndImage}>
                    <h2 className={style.title}>{props.project.name}</h2>
                    <img className={clickFlag? style.clickedImg: style.unClickedImg} src={props.project.img.src} onClick={() =>setClickFlag(!clickFlag)} alt="" />
                    
                </div>
                <div className={clickFlag? style.showInfo: style.hiddenInfo}>
                        <h3>{props.project.description}  </h3>
                        <a className={style.linkButton} target="_blank" href={props.project.url}>See project</a>
                </div>
                
                    

            </div>
        </div>
    )
}