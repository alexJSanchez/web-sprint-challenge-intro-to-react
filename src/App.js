import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharacterCard from './components/Character';
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [cards , setCards] = useState()
  

  useEffect(() => {
    axios.get("https://swapi.dev/api/people")
    .then(resp => {
  //  console.log(resp.data.results)
  setCards(resp.data.results)
  
    })
    .catch(err => {console.log(err)})
  }, [])   


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>  
    {cards && <CharacterCard content={cards}></CharacterCard>}
    </div>
  );
}

export default App;
