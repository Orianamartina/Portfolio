import ProjectsCarrusel from "../projectsCarrusel/ProjectsCarrusel"
import styles from "./projects.module.css"
import dogHub2 from "../../../../public/dogHub.png"
import dogHub1 from "../../../../public/dogHub1.png"
import dogHub3 from "../../../../public/dogHub2.png"
import dogHub4 from "../../../../public/dogHubMobile.png"
import dogHub5 from "../../../../public/dogHubMobile1.png"
import dogHub6 from "../../../../public/dogHubMobile2.png"

import sudoku1 from "../../../../public/Sudoku.png"
import sudoku2 from "../../../../public/SudokuMobile.png"
import ProjectCard from "../ProjectCard/ProjectCard"


export default function Projects(){

    const sudoku = {
        img: sudoku1,
        name: "Sudoku",
        description: "dahdisaudai"
    }
    const dogHub = {
        img: dogHub1,
        name: "DogHub",
        description: "dsjasdjasoida"
    }
    const sudokuMobile = {
        img: sudoku2,
        name: "Sudoku Mobile",
        description: "sudokuMobile"
    }
  
    return(
        <div className={styles.container}>

            <h1>Previous Projects</h1>

            <ProjectCard project = {sudoku} /> 
            <ProjectCard project = {sudokuMobile} />
            <ProjectCard project = {dogHub} />


            
            
        </div>
    )
}