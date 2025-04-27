import React from 'react'

const Header = (props) => {
    console.log(props.alumno.nombre)
    
  return (
    <header>
      <div className="text-center my-4">
      <h1 className="display-4">Portfolio {props.alumno.nombre}</h1>
      <hr />
    </div>
    </header>
    
  ) 
}

export default Header
