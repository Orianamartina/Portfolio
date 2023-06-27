import style from "./contact.module.css"
import github from "../../../../public/github.png"
import linkedin from "../../../../public/linkedin.png"
import phone from "../../../../public/phone-call.png"
import email from "../../../../public/email.png"
export default function Contact(){
 
    return(
        <div className={style.container}>
            
            <div className={style.textContainers}>
                <img src={linkedin.src} className={style.buttons}  alt="" />
               <a className={style.linkText}  href="https://www.linkedin.com/in/oriana-pettinelli-777a09268/" target="_blank">Linkedin</a> 
            </div>
            <div className={style.textContainers}>
               <img src={github.src} className={style.buttons} alt="" />
                <a className={style.linkText} href="https://github.com/Orianamartina" target="_blank">Github</a>
            </div>
            <div className={style.textContainers}>
                <img src={phone.src} className={style.buttons} alt="" />
                <h2  className={style.linkText} >+54 011 4989 6418</h2>
            </div>
            <div className={style.textContainers}>
                <img src={email.src} className={style.buttons} alt="" />
                <h2 className={style.linkText} >orianapettinelli1@gmail.com</h2>
            </div>
            
           
        </div>
    )
}