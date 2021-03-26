import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownContext, CountdownContextProvider } from '../contexts/CountdownContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  

  return(
    //quando ocorre de um componente depender do outro,
    //sempre o que depende vai como tag profileContainer
    //e a que é menos dependente vai como child
    <ChallengesProvider>
   
      <Component {...pageProps}/>
   
   
    </ChallengesProvider>
      
  ) 
  
}

export default MyApp
