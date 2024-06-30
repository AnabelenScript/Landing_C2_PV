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
                <h5 class="card-title">BATERIA DE LITIO</h5>
                <p class="card-text">Huawei LUNA2000-5KW-CO $45,000</p><br />
                <Button/>
              </div>
            </div>
            <div class="panel">
             <Panel/>
              <div class="card-body">
                <h5 class="card-title">INVERSOR</h5>
                <p class="card-text">Huawei SUN2000-3KTL-L1 $17,000</p><br />
              <Button/>
              </div>
            </div>
            </div>
        </>
    )
}

export default Paneles1;