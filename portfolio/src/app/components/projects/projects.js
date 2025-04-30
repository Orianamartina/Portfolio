const flashlingoBack = {
  name: "Flashlingo - backend",
  description:
    "Work in progress - Django project designed to evaluate a language learning method centered around active recall and spaced repetition. This project studies language learning by using the flashcard method alongside user statistics and metrics to keep track of learning. The initial version is intended for beginner german students that want to be more familiar with the language's vocabulary.  ",
  repoUrl: "https://github.com/Orianamartina/Flashlingo-back-v2",
  image: "",
  technologies: [
    "Python",
    "Django",
    "Django Rest Framework",
    "Daphne",
    "MongoDB",
    "Sqlite",
    "JWT",
    "Open API Schema",
  ],
};

const flashlingoFront = {
  name: "Flashlingo - frontend",
  description:
    "Work in progress - Next.js project designed to evaluate a language learning method centered around active recall and spaced repetition. This is the frontend application to provide with a intuitive and responsive interface to efficiently learn a language's vocabulary",
  image: "",
  technologies: ["NextJs", "Typescript", "Cypress", "Css", "Bootstrap"],
};

const concuMnist = {
  name: "ConcuMnist",
  description:
    "CONCUMNIST is a concurrent programming project designed to demonstrate the use of its techniques to efficiently handle multiple tasks simultaneously. The objective is to guess the number contained in a 28x28 pixel grayscale image. To achieve this, the project uses MNIST, a large database of handwritten digits used to train machine learning models and image processing systems. It guesses the number from the user's input by calculating its distance using the K-Nearest Neighbors (KNN) algorithm, comparing each image in the dataset with the user's input. This program can also run in TEST mode, using as input a CSV file with MNIST data.",
  technologies: ["Java", "Mnist database"],
  repoUrl: "https://github.com/Orianamartina/ConcuMnist",
};

const sudoku = {
  name: "Sudoku",
  description:
    "Sudoku SPA made in React that integrates a sudoku generator. With different interfaces adapting to wider and mobile screens, interactive, keyboard support for wide screens and integrated keyboard for mobile, game state management, different styles depending on the user's preference. Made with React and nodeJs",
  url: "https://sudoku.orianita.com.ar",
  technologies: ["React", "Javascript"],
  repoUrl: "https://github.com/Orianamartina/sudoku-prueba",
};
const electroShop = {
  name: "ElectroShop",
  description:
    "E-Commerce focused on electronic devices such as computers, tablets, cell-phones as well as accesories. Created as a bootcamp final project with a group of five students using SCRUM methodologies. Made with React and nodeJs",
  url: "https://electroshop-delta.vercel.app",
  repoUrl: "https://github.com/Orianamartina/Electroshop",
  technologies: ["Javascript", "React", "Express", "Sequelize", "PostgreSQL"],
};

export const projects = [
  flashlingoBack,
  flashlingoFront,
  concuMnist,
  sudoku,
  electroShop,
];
