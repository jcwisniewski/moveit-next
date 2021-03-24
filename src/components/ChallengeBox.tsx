import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){

  const {activeChallenge, resetChallenge} = useContext(ChallengesContext);
 

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
            onClick={resetChallenge}
            >
              Falhei
            </button>
            <button 
            className={styles.challengeSucceededButton}
            type="button"
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