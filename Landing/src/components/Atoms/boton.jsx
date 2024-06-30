import React from "react";
import './boton.css'

function Button(){
    return(
        <button className="enlace" onClick={()=> alert("Producto agregado al carrito")}>
            Agregar al carrito
        </button>
    );
}

export default Button;