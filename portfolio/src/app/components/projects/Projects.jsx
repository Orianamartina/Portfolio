
import style from "./projects.module.css"

import dogHub1 from "../../../../public/dogHub1.png"


import sudoku1 from "../../../../public/Sudoku.png"
import sudoku2 from "../../../../public/SudokuMobile.png"
import ProjectCard from "../ProjectCard/ProjectCard"


export default function Projects(){

    const sudoku = {
        img: sudoku1,
        name: "Sudoku",
        description: "Sudoku SPA made in React. Accessible for wider screens, interactive interface, keyboard support, game state management, different styles depending on the user's preference.",
        url: "https://sudoku-prueba.vercel.app"
    }

    const sudokuMobile = {
        img: sudoku2,
        name: "Sudoku Mobile",
        description: "Sudoku SPA made in react. Accessible for smaller screens, interactive interface with number selection buttons for touch screens, game state management, different styles depending on the user's preference.",
        url: "https://sudoku-prueba.vercel.app"
    }
    const dogHub = {
        img: dogHub1,
        name: "DogHub",
        description: "Dog breed searching SPA. Responsive. Search your favorite breeds, sort them or filter them by the given options, find all their information, or create a new one.",
        url: "https://proyecto-individual-henry.vercel.app"
    }
   
  
    return(
        <div className={style.container}>

            <h1 className={style.title}>Previous Projects</h1>

            <ProjectCard project = {sudoku} /> 
            <ProjectCard project = {sudokuMobile} />
            <ProjectCard project = {dogHub} />


            
            
        </div>
    )
}