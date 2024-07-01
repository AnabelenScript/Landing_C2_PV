import React from "react";
import '../Molecules/services.css'
import image from '../img/panelesInstalacion.mp4';


function Services (){
    return(
        <div className="containerPapa">
            
              <div class="col-md-6">
                <h4 className="text-center2">Conoce nuestro servicio de <br /> instalación</h4> 
                <p class="mt-4"/>
                <p className="parrafoUno">
                  Los servicios de instalación vienen incluidos en <br /> la compra de paquetes, el servicio es realizado <br /> por profesionales en electrónica garantizando la <br /> efectividad y funcionamiento de la instalación.
                </p>
              </div>
              <div class="col-md-6">
                <div class="container mt-5">
                  <div class="embed-responsive embed-responsive-16by9">
                    <video className="embed-responsive-item" controls/>
                      <source src={image} type="video"/>
                  </div>
                </div>
                </div>
             
            </div>
    )
}

export default Services