import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){


 

  const hasActiveChallenge = true;
  return(
    <div className={styles.challengeBoxContainer}>
      { hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg"/>
            <strong>Novo desafio</strong>
            <p>Levante e faça caminhada de 3 minutos.</p>
          </main>

          <footer>
            <button 
            className={styles.challengeFailedButton}
            type="button"
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