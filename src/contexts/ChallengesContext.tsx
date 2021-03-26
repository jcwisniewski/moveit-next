import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import challenges from '../../challenges.json';
import { CountdownContext } from './CountdownContext';

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

}

interface ChallengesProviderProps {
  children: ReactNode; //quando o children também é um componente entra como reactNode
}
export const ChallengesContext = createContext({} as ChallengesContextData);


export function ChallengesProvider({children}: ChallengesProviderProps){

  const {startCountdown} = useContext(CountdownContext);


  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengeCompleted, setChallengeCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect (() => {
    Notification.requestPermission();
    
  },[])

  function levelUp(){
    setLevel(level + 1);
    
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
    
    }}>
      {children}
    </ChallengesContext.Provider>
  );
}




