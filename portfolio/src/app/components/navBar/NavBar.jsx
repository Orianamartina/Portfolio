
export default function NavBar(props){

    const selectedComponent = props.selected
    const components = props.components
    console.log(components)
      //technology stack, contact
    return(
        <div>
            
                {components.map((component) => {
                        return(
                        <button className={selectedComponent === component.id ? 'active' : ''}
                                onClick={() => props.handleComponentClick(component.id)}
                                //key={component.id}
                                >
                            {component.name}
                        </button>
                   )
                })}
        
        </div>
    )
}