import {createContext, ReactNode, useState} from 'react';
import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye',
  description: string,
  amount: number
}

interface ChallengesContextData{
  level: number;
  currentExperience: number;
  challengeCompleted: number;
  activeChallenge: Challenge;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;

}

interface ChallengesProviderProps {
  children: ReactNode; //quando o children também é um componente entra como reactNode
}
export const ChallengesContext = createContext({} as ChallengesContextData);


export function ChallengesProvider({children}: ChallengesProviderProps){


  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengeCompleted, setChallengeCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  function levelUp(){
    setLevel(level + 1);
    
  }

  function startNewChallenge(){
    console.log('starting a new challenge');
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);
  }

  function resetChallenge(){
    setActiveChallenge(null);
  }
  return(
    <ChallengesContext.Provider value={{level,
    currentExperience,
    challengeCompleted,
    levelUp,
    startNewChallenge,
    activeChallenge,
    resetChallenge,
    }}>
      {children}
    </ChallengesContext.Provider>
  );
}




