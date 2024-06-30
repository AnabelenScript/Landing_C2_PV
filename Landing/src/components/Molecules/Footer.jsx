import React from "react";
import Logo from "../Atoms/logo";
import './footer.css'
import logoimg from '../img/logo.png'

function Footer(){
    return(
      <div className="footer">
        <img src={logoimg} alt="brand" className="logito"/>
        <p className="contacto">
        Carr. Tuxtla-Chiapa de Corzo<br></br>
        No. 651, 29040 Tuxtla Gutiérrez<br></br><br></br>
        
        Servicios telefónicos de 8 a
        6pm, <br></br> donde un técnico 
        te apoyará <br></br><br></br>
        
        +9611982583<br></br>
        </p>
    </div>  
    )
    
}

export default Footer;