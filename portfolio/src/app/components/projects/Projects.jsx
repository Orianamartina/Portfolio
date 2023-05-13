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
 
    const imagesDogHub = [
        {img: dogHub1, id: 1},
        {img: dogHub2, id: 2},
        {img: dogHub3, id: 3},
        {img: dogHub4, id: 4},
        {img: dogHub5, id: 5},
        {img: dogHub6, id: 6},
    ]
    const imagesSudoku = [
        {img: sudoku1, id: 1},
        {img: sudoku2, id: 2}
    ]
    return(
        <div className={styles.container}>

            <h1>Previous Projects</h1>

            <ProjectCard project = {sudoku} /> 
            <ProjectCard project = {dogHub} />

            <h2>Sudoku</h2>
            <img src={sudoku1.src} alt="" />
            <h2>Sudoku Mobile</h2>
            <img src={sudoku2.src} alt="" />
            <h2>ElectroShop</h2>

            <h2>DogHub</h2>
            <ProjectsCarrusel images = {imagesDogHub} />
            
            
            
        </div>
    )
}