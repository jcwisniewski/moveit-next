import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {ChallengesContext} from '../contexts/ChallengesContext';

interface CountdownContextData{
isActive: boolean;
hasFinished: boolean;
minutes: number;
seconds: number;
startCountdown: () => void;
disableCountdown: () => void;


}

interface CountdownContextProps{
  children: ReactNode;
}

let countdownTimeout : NodeJS.Timeout; //resolve o problema de demora de 1 segundo para parar o countdown

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownContextProvider ({children}: CountdownContextProps){
 
  const  {startNewChallenge} = useContext(ChallengesContext);
  
  

  const [time, setTime] = useState(0.1 * 60); //cria o use state para em segundos
  const [isActive, setActive ] = useState(false); //inicia o estado como faço para as variaveis ativas e inativas
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60); //faz a logica dos minutos
  const seconds = time % 60; //pega o resto de divisão de 60 para buscar os segundos


  //function to start contdown
  function startCountdown(){
    setActive(true);
  }
  function disableCountdown(){
    clearTimeout(countdownTimeout);
    setActive(false); //para o countdown
    setTime(0.1 * 60); //reserta o countdown
    setHasFinished(false);
  }

  useEffect(() => {
    //verify if active and if time not timeout
    if(isActive && time > 0){
     countdownTimeout = setTimeout(() => {
        setTime(time - 1); //count - 1 to number
      }, 1000)
    }else if (isActive && time == 0) {
      console.log('finalizou');
      setHasFinished(true);
      setActive(false);
      startNewChallenge();
    }
  }, [isActive, time])



  return(

  <CountdownContext.Provider value={{
    isActive,
    hasFinished,
    minutes,
    seconds,
    startCountdown,
    disableCountdown,

  }}>
    {children}
  </CountdownContext.Provider>
);

} 