import React from "react";

const Main = (props) => {
  return (
    <main>
      <div className="d-flex justify-content-center  ">
        <div className="card" style={{ width: "22rem" }}>
          <img
            src={props.alumno.imagen}
            className=""
            alt="Imagen de perfil"
          />
          <div >
            <h5   >{props.alumno.nombre}</h5>
            <p >Edad: {props.alumno.edad}</p>
            <p >Carrera: {props.alumno.carrera}</p>
            <p >Universidad: {props.alumno.universidad}</p>
            <p >
              Lenguajes: {props.alumno.lenguajes.join(", ")}
            </p>
            <p >{props.alumno.descripcion}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
