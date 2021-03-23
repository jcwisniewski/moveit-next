import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

export function Countdown(){
  const [time, setTime] = useState(25 * 60); //cria o use state para em segundos
  const [active, setActive ] = useState(false); //inicia o estado como faço para as variaveis ativas e inativas

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

  useEffect(() => {
    //verify if active and if time not timeout
    if(active && time > 0){
      setTimeout(() => {
        setTime(time - 1); //count - 1 to number
      }, 1000)
    }
  }, [active, time])
 
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
      <button className={styles.countdownButton}
      onClick={startCountdown} //call function to countdown
      >
        Iniciar um ciclo
        </button>
    </div>

  );
}