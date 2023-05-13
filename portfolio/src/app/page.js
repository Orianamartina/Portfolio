'use client'
import style from './page.module.css'
import Home from './components/home/Home'
import NavBar from './components/navBar/NavBar'
import Projects from './components/projects/Projects'
import AboutMe from './components/about me/AboutMe'
import { useState } from 'react'
import {motion, AnimatePresence } from 'framer-motion'
import Stack from './components/Stack/Stack'
import Contact from './components/contact/Contact'


export default function Main() {

  const [selectedComponent, setSelectedComponent] = useState('home');


  const handleComponentClick = (componentId)=>{
    setSelectedComponent(componentId);

  }

  const transitionVariants = {
    enter: {
      opacity: 0,
      x: 50,
      overflow: 'hidden'
    },
    center: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: -50,
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
      case 'stack':
        return <Stack />
      case 'contact':
        return <Contact />
      default:
        return null;
    }
  };

     const components = [
        { name: 'Home', id: 'home', key:1 },
        { name: 'AboutMe', id: 'aboutMe', key:2 },
        { name: 'Projects', id: 'projects', key:3 },
        { name: 'Stack', id: 'stack', key:4},
        { name: 'Contact', id: 'contact', key: 5},
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
          >
            {selectedComponent === component.id && renderComponent(component.id)}
          </motion.div>
        ))}
      </AnimatePresence>
      
    </main>
  )
}
