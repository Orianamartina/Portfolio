
import style from "./home.module.css"
import Image from "next/image"
import img from "../../../../public/oriana2.jpg"
export default function  Home(){ 


    return(
        <div className={style.container}>
        
            <div className={style.text}>
                <div className={style.circle2}></div>
                <h1>Hello, I am Oriana</h1>
                <h2>Full-stack developer</h2>    
                <a className={style.download} download={true}
                href= "/ORIANA PETTINELLI cv INGLES.pdf"
                alt="alt text"
                target="_blank"
                rel="noopener noreferrer"   >Download Resume</a>
            </div>
            <div>
               
                  <Image className={style.oriana}
                    src= {img}
                    alt="Picture of the author"
                >
                    
                </Image> 
            
    
            </div>
          
         
            
    
        </div>
    )
}