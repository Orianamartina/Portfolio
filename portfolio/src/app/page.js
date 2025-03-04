"use client";
import style from "./page.module.css";
import NavBar from "./components/navBar/NavBar";
import { useState, lazy, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HomeIcon } from "./components/Icons/HomeIcon";
import { BriefCaseIcon } from "./components/Icons/BriefCaseIcon";
import { BookIcon } from "./components/Icons/BookIcon";
import { PhoneIcon } from "./components/Icons/PhoneIcon";
const Home = lazy(() => import("./components/home/Home"));
const Projects = lazy(() => import("./components/projects/Projects"));
const Experience = lazy(() => import("./components/Stack/Experience"));
const Contact = lazy(() => import("./components/contact/Contact"));

export default function Main() {
  const [selectedComponent, setSelectedComponent] = useState("home");
  const [showComponent, setShowComponent] = useState();
  const [currentComponent, setCurrentComponent] = useState();
  useEffect(() => {
    setCurrentComponent(components.find((c) => c.id == selectedComponent));
    setShowComponent(renderComponent(selectedComponent));
  }, [selectedComponent]);

  const handleComponentClick = (componentId) => {
    setSelectedComponent(componentId);
  };

  const transitionVariants = {
    enter: {
      x: 50,
      // opacity: 1,
      overflow: "hidden",
    },
    center: {
      x: 0,
      // opacity: 1,
    },
  };

  const renderComponent = (componentId) => {
    switch (componentId) {
      case "home":
        return <Home />;
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
    { name: "Home", id: "home", image: <HomeIcon /> },
    { name: "Experience", id: "experience", image: <BookIcon /> },
    { name: "Projects", id: "projects", image: <BriefCaseIcon /> },
    { name: "Contact", id: "contact", image: <PhoneIcon /> },
  ];

  return (
    <main>
      <NavBar
        handleComponentClick={handleComponentClick}
        selectedComponent={selectedComponent}
        components={components}
      />
      {currentComponent && (
        <AnimatePresence>
          <motion.div
            key={currentComponent.id}
            variants={transitionVariants}
            initial="enter"
            animate={
              selectedComponent === currentComponent.id ? "center" : "exit"
            }
            exit="exit"
            onExitComplete={() => window.scrollTo(0, 0)}
            className={style.motionDiv}
            transition={{ duration: 1 }}
          >
            {showComponent}
          </motion.div>
        </AnimatePresence>
      )}
    </main>
  );
}
