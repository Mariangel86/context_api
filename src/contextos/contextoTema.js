import React, { useState } from "react";


const ContextoTema =  React.createContext();

const ProveedorTema = ({children}) => {
  const [tema, cambiarTema]= useState({
  alineado: "left",
  fuente:  20
  });
  const aumentarFuente= ()=> cambiarTema({...tema, fuente: tema.fuente +1});
  const disminuirFuente= ()=> cambiarTema({...tema, fuente: tema.fuente - 1});
  const alinearIzquierda= ()=> cambiarTema({...tema, alineado: 'left'});
  const alinearDerecha= ()=> cambiarTema({...tema, alineado: 'right'});
  const alinearcentro= ()=> cambiarTema({...tema, alineado: 'center'});
  
  
    return (
      
              <ContextoTema.Provider 
              value= {
               {tema,
                aumentarFuente,
                disminuirFuente,
                alinearIzquierda,
                alinearDerecha,
                alinearcentro}
                }>
                {children}
              </ContextoTema.Provider> 
              
    );
    
  }
  
  export {ContextoTema, ProveedorTema};
