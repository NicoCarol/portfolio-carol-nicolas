import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Foto from '../images/IMG_20241212_154554995.jpg'

const Home = () => {
    const alumno = {
        nombre:"Nicolas Carol",
        edad:32,
        carrera:"Tecnicatura universitaria en Programacion",
        universidad:"Universidad Tecnologica Nacional",
        lenguajes:["Javascript","Python","C#","SQL"],
        
        imagen:Foto,
        descripcion:"Soy Nicolás Carol, estudiante de programación, con conocimientos en varios lenguajes y gran pasión por el desarrollo."
    }




  return (
    <div className="app-container">
      
      <Header alumno={alumno}/>
      <Main alumno={alumno}/>
      <Footer/>
    </div>
  )
}

export default Home
