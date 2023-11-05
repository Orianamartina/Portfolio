import style from "./stack.module.css"


export default function Experience(){
 
    return(
        <div className={style.container}>
            
            <h1 className={style.title}>Experience and skills</h1>
            <div className={style.listContainer}>
                <div>
                    <h2 className = {style.title} >Languages</h2>
                    <ul className={style.list}>
                        <li className={style.stackDescription}>Javascript</li>
                        <li className={style.stackDescription}>Python</li>
                        <li className={style.stackDescription}>HTML</li>
                        <li className={style.stackDescription}>CSS</li>
                    </ul>
                </div>
                
               <div>
                    <h2 className = {style.title} >Front - end</h2>
                    <ul className={style.list}>
                        <li className={style.stackDescription}>React</li>
                        <li className={style.stackDescription}>NextJs</li>
                        <li className={style.stackDescription}>Redux</li>
                        <li className={style.stackDescription}>TailwindCSS</li>
                        <li className={style.stackDescription}>Responsive websites</li>
                    </ul>
               </div>
                
                <div>
                    <h2 className = {style.title} >Back - end</h2>
                        <ul className={style.list}>
                            <li className={style.stackDescription}>Express</li>
                            <li className={style.stackDescription}>Django</li>
                            <li className={style.stackDescription}>JWT</li>
                            <li className={style.stackDescription}>PostgreSQL</li>
                            <li className={style.stackDescription}>MySQL</li>
                            <li className={style.stackDescription}>Sequelize</li>
                        </ul>
                </div>
                
        
            </div>
            <div className={style.expContainer}>
                <h2 className={style.title}>Full-stack developer at <a className={style.link} target="_blank" href="https://www.linkedin.com/company/tecnosapiens-latam/">Tecnosapiens</a></h2>
                <h3 className={style.year}>Aug - Oct 2023</h3>
                <h3 className={style.description}>
                    E-commerce web sites built with React, nextJs, tailwindCSS, nodeJs with client and administrator roles.
                    Payment services APIS and e-mail notifications.
                    Agile methodologies with daily meetings and weekly follow-ups
                </h3>
            </div>
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