import React from 'react'

const Header = (props) => {
    console.log(props.alumno.nombre)
    
  return (
    <div className="text-center my-4 bg-warning">
      <h1 className="display-4">Portfolio {props.alumno.nombre}</h1>
      <hr />
    </div>
  ) 
}

export default Header
