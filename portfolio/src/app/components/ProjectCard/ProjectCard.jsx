"use Client"
import style from "./projectCard.module.css"
import { useState } from "react"
import Image from "next/image"
export default function ProjectCard(props){
    
    const [clickFlag, setClickFlag] = useState(false)


    

    return(
        <div className={style.container}>
            <div className={style.allInfoContainer}>
                <div className={clickFlag? style.titleAndImageClicked: style.titleAndImage} onClick={() =>setClickFlag(!clickFlag)}>
                    <h2 className={style.title}>{props.project.name}</h2>
                    <Image className={clickFlag? style.clickedImg: style.unClickedImg} src={props.project.img}  alt="" />
                    
                </div>
                <div className={clickFlag? style.showInfo: style.hiddenInfo}>
                        <h3 className={style.text}>{props.project.description}  </h3>
                        <a className={style.linkButton} target="_blank" href={props.project.repositorio}>Repository</a>
                        <a className={style.linkButton} target="_blank" href={props.project.url}>See Project</a>
                         {
                            props.project.video? <a className={style.linkButton} target="_blank" href={props.project.video}>Video</a>: " "
                         }
                </div>
               
                    

            </div>
        </div>
    )
}