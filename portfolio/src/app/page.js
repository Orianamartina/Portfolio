'use client'
import style from './page.module.css'
import Home from './components/home/Home'
import NavBar from './components/navBar/NavBar'
import Projects from './components/projects/Projects'
import AboutMe from './components/about me/AboutMe'
import { useState } from 'react'
import {motion, AnimatePresence } from 'framer-motion'
import Experience from './components/Stack/Experience'
import Contact from './components/contact/Contact'
import heart from "../../public/heart.png"
import book from "../../public/open-book.png"
import home from "../../public/home.png"
import portfolio from "../../public/portfolio.png"
import phone from "../../public/phone-call.png"

export default function Main() {

  const [selectedComponent, setSelectedComponent] = useState('home');


  const handleComponentClick = (componentId)=>{
    setSelectedComponent(componentId);

  }

  const transitionVariants = {
    enter: {
      opacity: 0,
      //x: 50,
      overflow: 'hidden',

      
    },
    center: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
     // x: -50,
    },
  };
  
  const renderComponent = (componentId) => {
    switch (componentId) {
      case 'home':
        return <Home />;
      case 'aboutMe':
        return <AboutMe />;
      case 'projects':
        return <Projects />;
      case 'experience':
        return <Experience />
      case 'contact':
        return <Contact />
      default:
        return null;
    }
  };

     const components = [
        { name: 'Home', id: 'home', image:home.src },
        { name: 'About Me', id: 'aboutMe', image:heart.src },
        { name: 'Projects', id: 'projects', image: portfolio.src },
        { name: 'Experience', id: 'experience', image:book.src},
        { name: 'Contact', id: 'contact', image: phone.src},
      ];
  return (
    <main >
      <NavBar handleComponentClick={handleComponentClick} selectedComponent={selectedComponent} components={components}/>
      <AnimatePresence>
        {components.map((component) => (
          <motion.div
            key={component.id}
            variants={transitionVariants}
            initial="enter"
            animate={selectedComponent === component.id ? 'center' : 'exit'}
            exit="exit"
            onExitComplete={() => window.scrollTo(0, 0)}
            className={style.motionDiv}
            transition={{ duration: 1 }}
          >
            {selectedComponent === component.id && renderComponent(component.id)}
          </motion.div>
        ))}
      </AnimatePresence>
      
    </main>
  )
}
