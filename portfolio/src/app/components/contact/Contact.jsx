import style from "./contact.module.css"
import github from "../../../../public/github.png"
import linkedin from "../../../../public/linkedin.png"
import phone from "../../../../public/phone-call.png"
import email from "../../../../public/email.png"
export default function Contact(){
 
    return(
        <div className={style.container}>
            
            <button className={style.textContainers}>
                
               <a className={style.linkText}  href="https://www.linkedin.com/in/oriana-pettinelli-777a09268/" target="_blank">
                <img src={linkedin.src} className={style.buttonImage}  alt="" />
                Linkedin</a> 
            </button>
            <button className={style.textContainers}>
               
                <a className={style.linkText} href="https://github.com/Orianamartina" target="_blank">
                    <img src={github.src} className={style.buttonImage} alt="" />
                    Github</a>
            </button>
            <button className={style.textContainers}>
       
                <a  className={style.linkText} href="https://wa.me/+541149896418" target="_blank">
                    <img src={phone.src} className={style.buttonImage} alt="" />   
                    +54 011 4989 6418</a>
            </button>
            <button className={style.textContainers}>
                
                <h2 className={style.linkText} >
                <img src={email.src} className={style.buttonImage} alt="" />    
                    orianapettinelli1@gmail.com</h2>
            </button>
            
           
        </div>
    )
}