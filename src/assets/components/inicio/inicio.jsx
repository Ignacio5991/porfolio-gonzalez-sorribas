import React from "react";
import image from "../../../../public/image/cvimage.jpg"
import  "../../styles/InicioStyle.css"
import { Link } from 'react-router-dom';

export default function Inicio (){
    return(
        <div>  
            <img  className="rostro" src={image}/>
        <h1>Desarrollador Web Full Stack Freelance y Creador de Contenido</h1>
        <p>¡Hola! Me llamo Ignacio. Soy creador de experiencias digitales sorprendentes y fáciles de usar.</p>
        <p> Con experiencia en el ecosistema de React y Node tanto en front end como en back end, he desarrollado aplicaciones web  desde 2022.</p> 
        <p>He trabajado como freelancer hace un año, donde  aprendì a fusionar creatividad y funcionalidad.</p>
       </div>
    );
}