import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import challenges from '../../challenges.json';
import { ModalBox } from '../components/ModalBox';
import { CountdownContext } from './CountdownContext';
import Cookies from 'js-cookie';

interface Challenge {
  type: 'body' | 'eye',
  description: string,
  amount: number
}

interface ChallengesContextData{
  level: number;
  currentExperience: number;
  experienceToNextLevel: number,
  challengeCompleted: number;
  activeChallenge: Challenge;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  closeModalBox: () => void;

}

interface ChallengesProviderProps {
  children: ReactNode; //quando o children também é um componente entra como reactNode
  level:number,
  currentExperience: number,
  challengeCompleted: number
}
export const ChallengesContext = createContext({} as ChallengesContextData);


export function ChallengesProvider({children, ...rest}: ChallengesProviderProps){

  const {startCountdown} = useContext(CountdownContext);


  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0 );
  const [challengeCompleted, setChallengeCompleted] = useState(rest.challengeCompleted ?? 0);
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isModalBoxOpen, setIsModalBoxOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect (() => {
    Notification.requestPermission();


  },[])

  useEffect(() => {
    Cookies.set('level', String(level))
    Cookies.set('currentExperience', String(currentExperience))
    Cookies.set('challengeCompleted', String(challengeCompleted))

  },[level, currentExperience, challengeCompleted])

  function levelUp(){
    setLevel(level + 1);
    setIsModalBoxOpen(true);

    
  }

  function startNewChallenge(){


    console.log('starting a new challenge');
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);

  

    new Audio('/notification.mp3').play();

    if(Notification.permission === 'granted') {
        new Notification('Novo desafio!', {
          body:`Valendo ${challenge.amount} xp!` 
        })
      } 

    }

  function resetChallenge(){
    setActiveChallenge(null);
  }

  function completeChallenge(){
    if(!activeChallenge){
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if(finalExperience >= experienceToNextLevel){
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengeCompleted(challengeCompleted + 1);
    new Audio('/completed.mp3').play();
  }

  function closeModalBox(){
    setIsModalBoxOpen(false);
  }

  
  return(
    <ChallengesContext.Provider value={{level,
    currentExperience,
    experienceToNextLevel,
    challengeCompleted,
    levelUp,
    startNewChallenge,
    activeChallenge,
    resetChallenge,
    completeChallenge,
    closeModalBox,
    
    }}>
      {children}
      {isModalBoxOpen && <ModalBox/>}
    </ChallengesContext.Provider>
  );
}




