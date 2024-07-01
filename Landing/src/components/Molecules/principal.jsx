import React from "react";
import '../Molecules/principal.css';
import image from '../img/paneles.png'; 

function Principal() {
    return (
        <div className="container">

                <div className="col-md-6">
                    <h4 className="hgrandre">Con tu compra, ayudas a la <br /> conservación del ambiente.</h4>
                    <p className="quote">
                        <em className="emthird">"El uso apropiado de la ciencia no es <br /> conquistar la naturaleza, sino vivir en ella".<br />Barry Commoner.</em>
                    </p>
                    <p className="psecond">
                        La energía solar se destaca por ser una fuente confiable <br />de energía, observando después de <br /> su implementación un aumento sustancial <br /> de ahorro y confiabilidad.
                    </p>
                </div>
                <div className="col-md-6">
                    <div className="image-container">
                        <img src={image} className="img-fluid rounded" alt="..." />
                    </div>
                </div>
                
        </div>
        
    );
}

export default Principal;
