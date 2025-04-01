import { useState } from "react";
import style from "./navBar.module.css";
export default function NavBar(props) {
  const selectedComponent = props.selectedComponent;
  const components = props.components;

  return (
    <div className={style.container}>
      {components.map((component, i) => {
        return (
          <button
            className={`${style.navButton} ${
              selectedComponent === component.id
                ? style.active
                : style.notActive
            }
              `}
            onClick={() => props.handleComponentClick(component.id)}
            key={component.id}
          >
            {component.image}
            <p className="cursive">{component.name}</p>
          </button>
        );
      })}
    </div>
  );
}
