import React from "react";
import { Link } from 'react-router-dom';
import Userlogo from "../Atoms/userlogo";
import Logo from "../Atoms/logo";
import './links.css'


function Links(){
    return(
            <>
            <div className="links">
      <Link className="navbar-brand" to="/"><Logo/></Link>
      <Link className="enlace" to="/">Inicio</Link>
      <Link className="enlace" to="/products">Productos</Link>
      <Link className="enlace" to="/paquetes">Paquetes</Link>
      <Link className="enlace" to="/acerca-de-nosotros">Acerca de nosotros</Link>
      <Link className="enlace" to="/contactanos">Contáctanos</Link>
      <Link className="enlace" to="/login"><Userlogo/></Link>
    </div>
             </>
    )
}

export default Links