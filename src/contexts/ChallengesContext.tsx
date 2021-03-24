import {createContext, ReactNode, useState} from 'react';

export const ChallengesContext = createContext({});

interface ChallengesContextData{
  level: number;
  currentExperience: number;
  challengeCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode; //quando o children também é um componente entra como reactNode
}

export function ChallengesProvider({children}: ChallengesProviderProps){
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengeCompleted, setChallengeCompleted] = useState(0);

  function levelUp(){
    setLevel(level + 1);
    
  }

  function startNewChallenge(){
    console.log('starting a new challenge');
  }
  return(
    <ChallengesContext.Provider value={{level,
    currentExperience,
    challengeCompleted,
    levelUp,
    startNewChallenge}}>
      {children}
    </ChallengesContext.Provider>
  );
}




