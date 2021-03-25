import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownContext, CountdownContextProvider } from '../contexts/CountdownContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  

  return(
    <ChallengesProvider>
    <CountdownContextProvider>
   
      <Component {...pageProps}/>
   
    </CountdownContextProvider>
    </ChallengesProvider>
      
  ) 
  
}

export default MyApp
