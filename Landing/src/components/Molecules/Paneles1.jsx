import React from "react";
import Button from "../Atoms/boton";
import Panel from "../Atoms/panel";
import './paneles1.css'


function Paneles1(){
    return(
        <>
        <div className="paneles1">
        <div className="panel">
              <Panel/>
              <div class="card-body">
                <h5 class="card-title">Panel Fotovoltaico</h5>
                <p class="card-text">Monocristalino CNS 605W 0.220 UDS/W $3,700</p><br />
                <Button/>
        </div></div>
        <div className="panel">
              <Panel/>
              <div class="card-body">
                <h5 class="card-title">Panel Monocristalino</h5>
              <p class="card-text">SUNOVA SOLAR de 460W 0.225 DLLS/W $2,500</p>
                <Button/>
              </div>
            </div>
            <div class="panel">
             <Panel/>
              <div class="card-body">
                <h5 class="card-title">Panel Fotovoltaico</h5>
              <p class="card-text">Monocristalino CNS 555W 0.200 UDS/W $3,000</p>
              <Button/>
              </div>
            </div>
            </div>
        </>
    )
}

export default Paneles1;
