
import style from "./home.module.css"
import Image from "next/image"
import picture from "./oriana.png"
export default function  Home(){

    return(
        <div className={style.container}>

            <h1>HELLO, i am Oriana</h1>
            <h2>full-stack developer</h2>
            <Image className={style.oriana}
                src= {picture}
                alt="Picture of the author"
            >

            </Image>
            <a download={true}
                href= "/ORIANA PETTINELLI cv INGLES.pdf"
                alt="alt text"
                target="_blank"
                rel="noopener noreferrer"
            >Download Resume</a>
    
            
    
        </div>
    )
}