import React from "react";
import userlogo from "../img/userlogo.png"
import './userlogo.css'

function Userlogo(){
    return(
        <>
            <img src={userlogo} alt="brand" className="userlogo"/>
        </>
    )
}

export default Userlogo;