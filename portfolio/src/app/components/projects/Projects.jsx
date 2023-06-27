
import style from "./projects.module.css"

import dogHub1 from "../../../../public/dogHub1.png"

import electroShop1 from "../../../../public/electroshop.png"
import sudoku1 from "../../../../public/Sudoku.png"
import sudoku2 from "../../../../public/SudokuMobile.png"
import ProjectCard from "../ProjectCard/ProjectCard"


export default function Projects(){

    const electroShop = {
        img: electroShop1,
        name: "ElectroShop",
        description: "E-Commerce focused on electronic devices such as computers, tablets, cell-phones as well as accesories. Created as a bootcamp final project with a group of five students using SCRUM methodologies. Made with React and nodeJs",
        url: "https://electroshop-delta.vercel.app",
        video: "https://www.youtube.com/watch?v=hz_tKs5abKA",
        repositorio: "https://github.com/Orianamartina/Electroshop"
    }
    const sudoku = {
        img: sudoku1,
        name: "Sudoku",
        description: "Sudoku SPA made in React. Accessible for wider screens, interactive interface, keyboard support, game state management, different styles depending on the user's preference. Made with React and nodeJs",
        url: "https://sudoku-prueba.vercel.app",
        repositorio:"https://github.com/Orianamartina/sudoku-prueba"
    }

    const sudokuMobile = {
        img: sudoku2,
        name: "Sudoku Mobile",
        description: "Sudoku SPA made in react. Accessible for smaller screens, interactive interface with number selection buttons for touch screens, game state management, different styles depending on the user's preference. Made with React and nodeJs",
        url: "https://sudoku-prueba.vercel.app",
        repositorio: "https://github.com/Orianamartina/sudoku-prueba"
    }
    const dogHub = {
        img: dogHub1,
        name: "DogHub",
        description: "Dog breed searching SPA. Responsive. Search your favorite breeds, sort them or filter them by the given options, find all their information, or create a new one. Made with React and nodeJs",
        url: "https://proyecto-individual-henry.vercel.app",
        repositorio: "https://github.com/Orianamartina/Proyecto-individual-henry"
    }
   
  
    return(
        <div className={style.container}>
            <div className={style.circle}></div>
             <div className={style.circle2}></div>
            <h1 className={style.title}>Previous Projects</h1>
            <h3 className={style.subtitle}>Click or tap on project to see info</h3>
            <ProjectCard project = {electroShop}/>
            <ProjectCard project = {dogHub} />
            <ProjectCard project = {sudoku} /> 
            <ProjectCard project = {sudokuMobile} />
            



            
            
        </div>
    )
}