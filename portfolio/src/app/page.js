"use client";
import style from "./page.module.css";
import NavBar from "./components/navBar/NavBar";
import { useState, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heart from "../../public/heart.png";
import book from "../../public/open-book.png";
import home from "../../public/home.png";
import portfolio from "../../public/portfolio.png";
import phone from "../../public/phone-call.png";
import { HomeIcon } from "./components/Icons/HomeIcon";

const Home = lazy(() => import("./components/home/Home"));
const AboutMe = lazy(() => import("./components/about me/AboutMe"));
const Projects = lazy(() => import("./components/projects/Projects"));
const Experience = lazy(() => import("./components/Stack/Experience"));
const Contact = lazy(() => import("./components/contact/Contact"));

export default function Main() {
  const [selectedComponent, setSelectedComponent] = useState("home");

  const handleComponentClick = (componentId) => {
    setSelectedComponent(componentId);
  };

  const transitionVariants = {
    enter: {
      x: 50,
      overflow: "hidden",
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
      case "home":
        return <Home />;
      case "aboutMe":
        return <AboutMe />;
      case "projects":
        return <Projects />;
      case "experience":
        return <Experience />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  const components = [
    { name: "Home", id: "home", image: <HomeIcon fill={"#000"} /> },
    { name: "About Me", id: "aboutMe", image: heart.src },
    { name: "Projects", id: "projects", image: portfolio.src },
    { name: "Experience", id: "experience", image: book.src },
    { name: "Contact", id: "contact", image: phone.src },
  ];
  return (
    <main>
      <NavBar
        handleComponentClick={handleComponentClick}
        selectedComponent={selectedComponent}
        components={components}
      />
      <AnimatePresence>
        {components.map((component) => (
          <motion.div
            key={component.id}
            variants={transitionVariants}
            initial="enter"
            animate={selectedComponent === component.id ? "center" : "exit"}
            exit="exit"
            onExitComplete={() => window.scrollTo(0, 0)}
            className={style.motionDiv}
            transition={{ duration: 1 }}
          >
            {selectedComponent === component.id && (
              <Suspense fallback={<div>Loading...</div>}>
                {renderComponent(component.id)}
              </Suspense>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </main>
  );
}
