import React from "react";
import Button from "../Atoms/boton";
import './otros.css';
import powermeter from '../img/Power Meter DTSU666 h Huawei Trifásico.jpeg'
import bateria from '../img/2218.png'
import inversor from '../img/img1.jpeg'



function Otros(){
    return(
        <>
        <div className="otros1">
        <div className="otros">
        <div class="panel">
        <img src={bateria} alt="brand" className="img3"/>
              <div class="card-body">
              <h5 class="card-title">BATERIA DE LITIO</h5>
              <p class="card-text">Huawei LUNA2000-5KW-CO $45,000</p><br /><br />
               <Button/>
              </div>
            </div>
          <div class="panel">
          <img src={inversor} alt="brand" className="img3"/>
              <div class="card-body">
              <h5 class="card-title">INVERSOR</h5>
              <p class="card-text">Huawei SUN2000-3KTL-L1 $17,000</p><br /><br />
                <Button/>
              </div>
            </div>
          <div class="panel">
          <img src={powermeter} alt="brand" className="img3"/>
              <div class="card-body">
              <h5 class="card-title">Power Meter</h5>
              <p class="card-text">SMART POWER DTSU666-H250 $3,000</p><br /><br />
              <Button/>
              </div>
            </div>
            </div></div>
</>
    )
}

export default Otros;