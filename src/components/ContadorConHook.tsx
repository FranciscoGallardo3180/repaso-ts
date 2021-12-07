//import { useState } from "react";
import useCounter from "../hooks/useCounter";

const ContadorConHook = () => {

    
   const {valor,acumular} =useCounter(0);

    return (
        <>
        <h3>Contador con Hook: <small>{valor}</small> </h3>

        <button className="btn  btn-primary"
        onClick={()=> acumular(1)}>
            +1
        </button> <span> </span>
        <button className="btn btn-primary"
        onClick={()=> acumular(-1)}>
            -1
        </button>
        </>
    )
}

export default ContadorConHook
