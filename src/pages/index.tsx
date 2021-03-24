import Head from 'next/head';
import {ExperienceBar} from '../components/ExperienceBar';
import {Profile} from '../components/Profile';
import {CompletedChallenge} from '../components/CompletedChallenge';
import {Countdown} from '../components/Countdown';
import {ChallengeBox} from '../components/ChallengeBox';


import styles from '../styles/pages/Home.module.css';



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Move it!</title>
      </Head>
    <ExperienceBar/>

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

  </div>
  )
}
