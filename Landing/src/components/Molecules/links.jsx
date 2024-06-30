import React from "react";
import Userlogo from "../Atoms/userlogo";
import Logo from "../Atoms/logo";
import './links.css'


function Links(){
    return(
            <><div class="links">
            <a class="navbar-brand" href="sinInicio.html"><Logo/></a>
              <a class="enlace" href="sinInicio.html">Inicio</a>
              <a class="enlace" href="siProductos.html">Productos</a>
              <a class="enlace" href="sipaquetes.html">Paquetes</a>
              <a class="enlace" href="cinosotros.html">Acerca de nosotros</a>
              <a class="enlace" href="cincontactanos.html">Contáctanos</a>
              <a class="enlace" href="login.html"><Userlogo/></a></div>
             </>
    )
}

export default Links