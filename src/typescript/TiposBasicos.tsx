import React from "react";

const TiposBasicos = () =>{

    const nombre: string | number = 'Francisco';
    const edad  =27;
    const estaActivo: boolean = false;

    const poderes = ['velocidad', 'volar','respirar en el agua']
    return(
        <>
            <h2>Tipos Basicos</h2>
            <h3>{nombre},{edad}, {(estaActivo) ? 'activo':'no activo'}</h3> 
            <br/>
            {poderes.join(', ')}
            
        </>
    )
}

export default TiposBasicos