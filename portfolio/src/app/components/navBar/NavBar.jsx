import style from "./navBar.module.css"
export default function NavBar(props){

    const selectedComponent = props.selectedComponent
    const components = props.components
      //technology stack, contact

    return(
        <div className={style.container}>
            
                {components.map((component) => {
                        return(
                        <button className={selectedComponent === component.id ? style.active : style.notActive}
                              
                                onClick={() => props.handleComponentClick(component.id)}
                                key={component.id}
                                >
                            {component.name}
                        </button>
                   )
                })}
        
        </div>
    )
}