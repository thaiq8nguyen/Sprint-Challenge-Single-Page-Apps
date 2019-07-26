import React, {useState} from 'react'
import rickAndMorty from "../services/rickAndMorty";
import CharacterCard from "../components/CharacterCard";

const SearchCharacter = () => {
    const [results, setResults] = useState([]);
    //const [characterName, setCharacterName] = useState();
    const [query, setQuery] = useState("");

    const resultColumnsStyles = {
        marginTop: "15px"
    }

    
    const getCharacter = (characterName) => {
        rickAndMorty.getCharacter(characterName)
        .then(response => {
            setResults(response.data.results);
            setQuery("");
        })
        .catch(errors => {
            console.log(errors)
        })
    }
    

    const handleInputChange = event => {
        setQuery(event.target.value);
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        
        getCharacter(query);
    }

    const clearResult = event => {
        setResults([])
    }
    return (
        <div className="notification">
            <form action="#" onSubmit={handleFormSubmit}>
                <div className="field has-addons">
                    <div className="control is-expanded">
                        <input 
                            type="text" 
                            name="character" 
                            className="input" 
                            placeholder="Character Name"
                            value={query}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="control">
                        <button className="button is-info">Search</button>
                    </div>
                    
                </div>
            </form>
           {results.length > 0 && <div className="notification">
               <button className="delete" onClick={clearResult}></button>
               <div className="columns is-multiline" style={resultColumnsStyles}>
                {results.map(result => (
                    <div className="column is-one-quarter" key={result.id}>
                        <CharacterCard character={result}/>
                    </div>
                ))}
               </div>
           </div>}
        </div>
    )
}

export default SearchCharacter
