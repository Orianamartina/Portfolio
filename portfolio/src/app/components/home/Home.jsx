
import style from "./home.module.css"
import Image from "next/image"
import img from "../../../../public/oriana2.jpg"
import github from "../../../../public/github.png"
import linkedin from "../../../../public/linkedin.png"
export default function  Home(){ 


    return(
        <div className={style.container}>
        
            <div className={style.text}>
                <div className={style.circle}></div>
                <div className={style.circle2}></div>
                <h1>Hello, I am Oriana</h1>
                <h2>Full-stack developer</h2>    
                <a className={style.download} download={true}
                href= "/ORIANA PETTINELLI cv INGLES.pdf"
                alt="alt text"
                target="_blank"
                   >Download Resume</a>
                <div>
                   <a  href="https://www.linkedin.com/in/oriana-pettinelli-777a09268/" target="_blank">
                        <img className={style.contactButton} src={linkedin.src} alt="" />
                    </a>
                    <a  href="https://github.com/Orianamartina" target="_blank">
                        <img className={style.contactButton} src={github.src} alt="" />
                    </a> 
                </div>
                
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