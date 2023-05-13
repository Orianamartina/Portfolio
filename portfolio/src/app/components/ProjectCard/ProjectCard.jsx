"use Client"
import style from "./projectCard.module.css"
import { useState } from "react"
export default function ProjectCard(props){
    
    const [clickFlag, setClickFlag] = useState(false)


    

    return(
        <div className={style.container}>
            <div className={style.allInfoContainer}>
                <div className={clickFlag? style.titleAndImageClicked: style.titleAndImage}>
                    <h2 className={clickFlag? style.clickedTitle: style.unClickedTitle}>{props.project.name}</h2>
                    <img className={clickFlag? style.clickedImg: style.unClickedImg} src={props.project.img.src} onClick={() =>setClickFlag(!clickFlag)} alt="" />
                    
                </div>
                <div className={clickFlag? style.clickedSpace: style.unClickedSpace}>

                </div>
                
                    <h3 className={clickFlag? style.showInfo: style.hiddenInfo}>{props.project.description}</h3>

            </div>
        </div>
    )
}