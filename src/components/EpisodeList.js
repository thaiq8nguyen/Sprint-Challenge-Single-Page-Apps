import React, {useState, useEffect} from 'react'

import rickAndMorty from "../services/rickAndMorty";
import EpisodeCard from "./EpisodeCard";

const EpisodeList = () => {
    const [episodes, setEpisodes] = useState([])
    useEffect(() => {
        const getAllEpisodes = () => {
            rickAndMorty.getAllEpisodes()
            .then(response => {
                
                setEpisodes(response.data.results)
            })
            .catch(errors => {

            })
        }

        getAllEpisodes();
    },[])

    return (<section className='section'>

    <div className="container">
      <div className="columns is-multiline">
        {episodes.map(episode => (
          <div className="column is-one-third" key={episode.id}>
            <EpisodeCard episode={episode}/>
          </div>
        ))}
        
      </div>
    </div>
    </section>
    )
}

export default EpisodeList
