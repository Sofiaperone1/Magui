import React from 'react'
import hacemos from "../../Imgs/hacemos.jpg"

import "./PrintDesigns.css"

const PrintDesigns = () => {
  return (
    <div className='print_cont'>
      <h1>Follow the steps to order a <span>new & original </span>print </h1>
      <div className='print_div'>
        <div className='text'>
        <p> <span>1</span>Te contactas, a través de MD via instagram o email, contandonos sobre vos y tu emprendimiento, tus ideas, inspiraciones y objetivos.
        Esta información es esencial para diseñar a conciencia.
        Tene en cuenta que los diseños son las piezas fundamentales de una colección o identidad de una marca.</p>
        <p> <span>2</span>Planificamos el proyecto. Acordamos estilo, tamaño, escala y paleta de colores del pattern. Estipulamos fechas de entregas y presupuesto. Cuanta más especifica sea esta planificación, mejor va a ser el resultado final.</p>
        <p> <span>3</span>Primer boceto - Envío del primer boceto, y de ser necesario, redefinición del mismo (hasta que te encante!)</p>
        <p> <span>4</span>Entrega de los archivos
        Una vez confirmado el diseño final, se enviaran los archivos por email en el formato que te pidan para su impresion. (TIFF/JPG/PDF)</p>
        </div>
        <img src={hacemos} alt="hacemos" />
     </div>
    </div>
  )
}

export default PrintDesigns