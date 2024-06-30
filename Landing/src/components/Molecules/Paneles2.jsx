import React from "react";
import Button from "../Atoms/boton";
import Panel from "../Atoms/panel";
import './paneles2.css';


function Paneles2(){
    return(
        <>
        <div className="paneles2">
        <div class="panel">
              <Panel/>
              <div class="card-body">
                <h5 class="card-title">Panel Fotovoltaico</h5>
                <p class="card-text">Monocristalino CNS 655W 0.220 UDS/W $4,000</p><br />
               <Button/>
              </div>
            </div>
          <div class="panel">
              <Panel/>
              <div class="card-body">
                <h5 class="card-title">Panel Monocristalino</h5>
                <p class="card-text">SUNOVA SOLAR de 360W 0.225 DLLS/W $2,800</p><br />
                <Button/>
              </div>
            </div>
          <div class="panel">
             <Panel/>
              <div class="card-body">
                <h5 class="card-title">Panel Fotovoltaico</h5>
                <p class="card-text">Monocristalino CNS 350W 0.200 UDS/W $1,500</p><br />
              <Button/>
              </div>
            </div>
            </div>
</>
    )
}

export default Paneles2;