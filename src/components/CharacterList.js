import React, { useEffect, useState } from 'react';
import rickAndMorty from "../services/rickAndMorty";
import CharacterCard from "../components/CharacterCard";
import SearchCharacter from "../components/SearchCharacter";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getAllCharacters = () => {
      rickAndMorty.getAllCharacters()
      .then(response => {
        setCharacters(response.data.results)
      })
      .catch(error => {
        console.log(error)
      })
    }

    getAllCharacters();

  }, [])

  return <section className='section'>

      <div className="container">
        <SearchCharacter/>
        <div className="columns is-multiline">
          {characters.map(character => (
            <div className="column is-one-third" key={character.id}>
              <CharacterCard character={character}/>
            </div>
          ))}
          
        </div>
      </div>
    </section>

}
