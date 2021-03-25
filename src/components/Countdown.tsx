import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

let countdownTimeout : NodeJS.Timeout; //resolve o problema de demora de 1 segundo para parar o countdown

export function Countdown(){
  
  const {
        minutes,
        seconds,   
        hasFinished,
        isActive,
        disableCountdown,
        startCountdown} = useContext(CountdownContext);

      //faz a verificaçao com um dos algarismos dos minutos
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split(''); 
  //faz a verificaçao com um dos algarismos dos segundos
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    
 
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