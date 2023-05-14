import style from "./aboutMe.module.css"

export default function AboutMe(){

    return(
        <div className={style.container}>
             <div className={style.circle}></div>
            <h2 className={style.title}>About Me</h2>
            
            <p className={style.paragraph}>
                
                I&apos;m a driven and enthusiastic Full-Stack Developer currently pursuing my Bachelor&apos;s degree in Computer Science at the National University of Quilmes. With a strong passion for programming, computer science, and languages, 
                I am eager to contribute my skills and knowledge to the world of software development.

                Throughout my journey, I have gained valuable experience in working on diverse projects using a wide range of technologies. I am proficient in languages such as JavaScript, and Python,
                 and have hands-on experience with frameworks and libraries like React, Redux, and Express.js. Additionally, I have worked with databases like PostgreSQL, further expanding my expertise in backend development.
            </p>        
            <p className={style.paragraph}>
               
                I have an advanced level of English and a beginner/intermediate level of German.
            </p>

            <p className={style.paragraph}>
                I am excited to embark on the next phase of my professional career, where I can apply my passion for programming and my comprehensive skill set to make a positive impact.
                 With a growth mindset and a strong drive for success, I am ready to take on new challenges and contribute to the success of any team or project I am a part of.
 
            
            </p>
        </div>
    )
}