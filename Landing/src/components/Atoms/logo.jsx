import React from "react";
import logoimg from "../img/logo.png"
import './logo.css'

function Logo(){
    return(
        <>
            <img src={logoimg} alt="brand" className="logo"/>
        </>
        )
}

export default Logo;