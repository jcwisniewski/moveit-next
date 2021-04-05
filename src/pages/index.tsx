import Head from 'next/head';
import {ExperienceBar} from '../components/ExperienceBar';
import {Profile} from '../components/Profile';
import {CompletedChallenge} from '../components/CompletedChallenge';
import {Countdown} from '../components/Countdown';
import {ChallengeBox} from '../components/ChallengeBox';
import {GetServerSideProps} from 'next';


import styles from '../styles/pages/Home.module.css';
import { CountdownContextProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';



export default function Home(props) {
  return (
    <ChallengesProvider 
    level={props.level}
    currentExperience={props.currentExperience}
    challengeCompleted={props.challengeCompleted}>
    <div className={styles.container}>
      <Head>
        <title>Move it!</title>
      </Head>
    <ExperienceBar/>

    <CountdownContextProvider>

      <section>
        <div>
          <Profile />
          <CompletedChallenge />
          <Countdown />
          
        </div>
        <div>
        <ChallengeBox />
        </div>
      </section>
      
    </ CountdownContextProvider>


  </div>
  </ChallengesProvider>
  )


   
}

export const  getServerSideProps: GetServerSideProps = async (ctx) => {
      const {level, currentExperience, challengeCompleted} = ctx.req.cookies;

  return {
    props:{
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengeCompleted: Number(challengeCompleted)
    }
  }
 

}
