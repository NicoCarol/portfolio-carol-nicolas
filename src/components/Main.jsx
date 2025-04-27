import React from 'react'

const Main = (props) => {
  return (
    <div className="d-flex justify-content-center bg-secondary ">
      <div className="card bg-dark text-white" style={{ width: '22rem' }}>
        <img src={props.alumno.imagen} className="card-img-top" alt="Imagen de perfil" />
        <div className="card-body">
          <h5 className="card-title">{props.alumno.nombre}</h5>
          <p className="card-text">Edad: {props.alumno.edad}</p>
          <p className="card-text">Carrera: {props.alumno.carrera}</p>  
          <p className="card-text">Universidad: {props.alumno.universidad}</p>
          <p className="card-text">Lenguajes: {props.alumno.lenguajes.join(', ')}</p>
          <p className="card-text">{props.alumno.descripcion}</p>
        </div>
      </div>
    </div>
  )
}

export default Main
