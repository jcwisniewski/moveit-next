import {createContext, ReactNode, useContext, useEffect, useState} from 'react';


interface ModalBoxContextData{

}

interface ModalBoxProviderProps {
  children: ReactNode; //quando o children também é um componente entra como reactNode
}
export const ModalBoxContext = createContext({} as ModalBoxContextData);


export function ModalBoxProvider({children}: ModalBoxProviderProps){

  
 


  
  return(
    <ModalBoxContext.Provider value={{
    }}>
      {children}
    </ModalBoxContext.Provider>
  );
}




