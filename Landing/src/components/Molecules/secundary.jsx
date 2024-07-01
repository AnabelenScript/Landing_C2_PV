import React from "react";
import '../Molecules/Secundary.css'
import image from '../img/varon-joven-cartel-inscripcion-sobre-fondo-amarillo-rasgado-chicos-venta-compras_140725-159644.avif';

function Secundary (){
    return(
        <div className="container2">
            
                <div className="col-md-6">
                    <h4 className="grandeH">¡Aprovecha esta oferta que <br /> tenemos para ti!</h4>
                    <p className="mt-4">
                        En la compra de cualquier producto o paquete <br />
                        de la tienda te otorgamos un 30% de descuento <br />
                        al costo total de su compra.
                    </p>
                    <div className="d-grid gap-2 d-md-block">
                        <br /><br />
                        <button 
                            className="btn" 
                            type="button" 
                            onClick={() => window.location.href='login.html'}
                        >
                            INICIA SESIÓN
                        </button>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="image-container2">
                    <img src={image} className="img-fluid rounded" alt="..." />
                    </div>
                </div>
        </div>
    )
}

export default Secundary