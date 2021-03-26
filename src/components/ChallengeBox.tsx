import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){

  const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext);
  const {disableCountdown} = useContext(CountdownContext);
  
 function  handleChallengeFailed(){
  //necessário criar uma nova função para chamar
  //mais de uma função no botão
  resetChallenge();
  disableCountdown();
  
 }

 function  handleChallengeSucceeded(){
  
  completeChallenge();
  disableCountdown();
  
 }



  return(
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src="icons/body.svg"/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button 
            className={styles.challengeFailedButton}
            type="button"
            onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button 
            className={styles.challengeSucceededButton}
            type="button"
            onClick={handleChallengeSucceeded}
            >
              Completei
            </button>

          </footer>
        </div>
        ) : (
         <div className={styles.challengeBoxNotActive}>
        
         <strong>
           Inicie um ciclo para receber desafios a serem completados
         </strong>
           <p>
             <img src="icons/level-up.svg" alt="Level up"/>
           Complete-os e ganhe experiência e avançe de level
           </p>  
          </div>
      ) }
           
    </div>
  )
}