import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ModalBox.module.css';

export function ModalBox (){

  const {level, closeModalBox} = useContext(ChallengesContext);

  return(

    <div className= {styles.modalBoxContainer}>
        <div className={styles.modalContent}>
            <header>{level}</header>
            <p>Parabens garoto!</p>
            <button type="button" onClick={closeModalBox}>
              <img src="/icons/close.svg" alt=""/>
            </button>
        </div>
    </div>
  )
}