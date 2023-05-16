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


export default function Experience(){
 
    return(
        <div className={style.container}>
            
            <h1 className={style.title}>Experience and skills</h1>
            <div className={style.imgContainer}>
                <Image className={style.img} src={html} alt="html" />
                <Image className={style.img} src={css} alt="css" />
                <Image className={style.img} src={javascript} alt="javascript" />
                <Image className={style.img} src={node} alt="node" />
                <Image className={style.img} src={python} alt="python" />
                <Image className={style.img} src={react} alt="react" />
                <Image className={style.img} src={next} alt="next" />
                <Image className={style.img} src={redux} alt="redux" />
                <Image className={style.img} src={sequelize} alt="sequelize" />
                <Image className={style.img} src={postgres} alt="postgres" />
                <Image className={style.img} src={git} alt="git" />
                <Image className={style.img} src={github} alt="github" />
               
            </div> 
            <div className={style.circle}></div>
            <div className={style.circle2}></div>

            <div className={style.expContainer}>
                    <h2 className = {style.title} >Henry Bootcamp</h2>
                    <h3 className={style.year}>2023</h3>
                    <h3 className={style.description}>
                    During the four-month bootcamp, I delved into Node.js, React, Redux, Sequelize, Express, and MySQL, completing an individual project and a final group project using Scrum methodologies. With approximately 700 hours of dedicated learning, I gained comprehensive full-stack web development skills and experienced real-world challenges. Mentored by industry professionals, 
                    I emerged equipped with newfound knowledge, resilience, and passion for web development.
                    </h3>
                    <a className={style.link}  href="https://certificates.soyhenry.com/new-cert?id=d6cb42c7273f109dbb42d68b4b9e10c0ac6942d7335adebefd564c998198980b" target="_blank">Certificate</a>
            </div>
            <div className={style.expContainer}> 
                <h1 className = {style.title} > Bachelor&apos;s degree in Computer Science, Universidad Nacional de Quilmes</h1>
                <h2 className={style.year} >2022 / current</h2>
                <h3 className={style.description} >The initial cycle, called Diploma in Computer Programming, is aimed at offering solid training in basic knowledge related to Computer Programming. At the end of the studies corresponding to the first cycle, students obtain a certificate of Diploma in Computer Programming.  
                    
                </h3>
                <h3 className={style.description} >The upper cycle of the Bachelor&apos;s Degree in Computer Science completes the Diploma in Computer Programming with extensive training in specific topics of the discipline with the aim that the graduate can play a leading role in it.</h3>
                <a className={style.link}  href="http://www.unq.edu.ar/carreras/58-licenciatura-en-informática.php" target="_blank">Program</a> 

            </div>
            <div className={style.expContainer}> 
                <h1 className = {style.title} > EF SET English Certificate 87/100 (C2 Proficient)</h1>
                <h2 className={style.year} >2023</h2>
                <a className={style.link}  href="https://efset.org/cert/1X3aht" target="_blank">Certificate</a> 
            </div>
            <div className={style.expContainer}>
                <h1 className = {style.title} > Operating Systems and You: Becoming a Power User, Google.</h1>
                <h2 className={style.year} >2021</h2>
                <a className={style.link} href="https://coursera.org/share/63f4a4ca9b9f495a7be92a7a9435dc48" target="_blank">Certificate</a> 
            </div>
            <div className={style.expContainer}> 
                <h1 className = {style.title} > The Bits and Bytes of Computer Networking, Google</h1>
                <h2 className={style.year} >2021</h2>
                <a className={style.link} href="https://coursera.org/share/2ce284064cb1bc95252bccd2cc57c8dc" target="_blank">Certificate</a> 
            </div>
            <div className={style.expContainer}> 
                <h1 className = {style.title} > Technical Support Fundamentals, Google</h1>
                <h2 className={style.year} >2021</h2>
                <a className={style.link} href="https://coursera.org/share/083dbf9dbe4e91ff73341501eb3d056b" target="_blank">Certificate</a> 
            </div>
            
       
               
        </div>
    )
}