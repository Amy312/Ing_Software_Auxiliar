import { useEffect, useState } from "react";
import "./App.css";
import SubjectCard from "./components/SubjectCard"
import { pokeAPI } from "./services/pokeapi";
function App() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    pokeAPI.get('/pojemon/ditto').then(response => {
      debugger;
      setPokemon(response.data);
    })
    .catch(error => {
      console.error('Error')
    })
  })
  return (
    <SubjectCard/>
  );
}

export default App;
