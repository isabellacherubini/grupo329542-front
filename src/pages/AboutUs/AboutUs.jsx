import React from "react";
import './AboutUs.css'

function AboutUs() {
  return (
    <>
    <h1>Sobre Nosotras</h1>
    <div class="container">
        <div class="item">
          <img src="/amanda_dibujo.png" class="imgabout"></img>
        </div>
        <div class="item">
          <h3>Amanda Sandoval</h3>
          <p>Cumpleaños: 11 de mayo</p>
          <p>Major: Computación</p>
          <p>Minor: Fundamentos Científicos y Tecnológicos de la computación</p>
          <p>Dato freak: Se ha leído cada libro de Harry Potter 19 veces</p>
        </div>
    </div>
    <div class="container">
    <div class="item">
          <img src="/isabella_dibujo.png" class="imgabout"></img>
        </div>
        <div class="item">
          <h3>Isabella Cherubini</h3>
          <p>Cumpleaños: 8 de marzo</p>
          <p>Major: Software</p>
          <p>Minor: Fundamentos Científicos y Tecnológicos de la computación</p>
          <p>Dato freak: Es alérgica a los cheetos de maní</p>
        </div>
    </div>
    </>
  )
}

export default AboutUs;