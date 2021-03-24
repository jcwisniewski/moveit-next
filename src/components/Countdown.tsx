import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

export function Countdown(){
  var countdownTimeout : NodeJS.Timeout; //resolve o problema de demora de 1 segundo para parar o countdown

  const [time, setTime] = useState(0.1 * 60); //cria o use state para em segundos
  const [isActive, setActive ] = useState(false); //inicia o estado como faço para as variaveis ativas e inativas
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60); //faz a logica dos minutos
  const seconds = time % 60; //pega o resto de divisão de 60 para buscar os segundos

  //faz a verificaçao com um dos algarismos dos minutos
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split(''); 
  //faz a verificaçao com um dos algarismos dos segundos
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  //function to start contdown
  function startCountdown(){
    setActive(true);
  }
  function disableCountdown(){
    clearTimeout(countdownTimeout);
    setActive(false); //para o countdown
    setTime(0.1 * 60); //reserta o countdown
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
    }
  }, [isActive, time])
 
  return(
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
        <span>{secondLeft}</span>
        <span>{secondRight}</span>
        </div>
        <div>
        </div>
      </div>
        {hasFinished ? (
           <button
            
           disabled
           className={`${styles.countdownButton} ${styles.countdownButtonDisable} `}
           >
             Ciclo encerrado
             </button>
        ) : (
          <>
          {isActive ? (
          <button 
          className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
          onClick={disableCountdown} //call function to countdown
          >Abandonar ciclo</button>
            ): (
              <button 
              className={styles.countdownButton}
              onClick={startCountdown} //call function to countdown
              >Iniciar um ciclo</button>
            )}
          </>
        )}
      </div>

  );
}