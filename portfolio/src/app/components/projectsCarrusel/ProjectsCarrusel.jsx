"use Client"
import style from "./projectsCarrusel.module.css"
import { useState } from "react"
export default function ProjectsCarrusel(props){
    const [currentImg, setCurrentImg] = useState(0)
    console.log(props.images[currentImg].img)

    const handleClickRight = ()=>{
        if (currentImg < props.images.length - 1){
                setCurrentImg(currentImg + 1)
               
        }
    }
    
    const handleClickLeft = ()=>{
        if (currentImg > 0){
            setCurrentImg(currentImg - 1)
        }
    }
    

    return(
        <div className={style.container}>
            
            <button onClick={handleClickLeft}>{"<"}</button>
                <img src={props.images[currentImg].img.src} className={style.image} alt="" />
            <button onClick={handleClickRight}>{">"}</button>
        </div>
    )
}