import  'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/js/bootstrap.bundle.min.js';
import  Mynav from './components/Mynav'
import MyFooter from './components/MyFooter'
import ActionBar from './components/ActionBar'
import StarWars from './components/StarWars'
import Marvel from './components/Marvel'
import Disney from './components/Disney';

function App() {
  return(
    
   <>
<Mynav />
<ActionBar/>
<StarWars/>
<Marvel/>
<Disney/>
<MyFooter/>

   </>

 ) 
}

export default App


