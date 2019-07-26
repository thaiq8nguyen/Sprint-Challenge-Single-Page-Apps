import React, { useEffect, useState } from 'react';
import rickAndMorty from "../services/rickAndMorty";
import LocationCard from "./LocationCard";

export default function LocationsList() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const getAllLocations = () => {
            rickAndMorty.getAllLocations()
            .then(response => {
                setLocations(response.data.results)
            })
            .catch(errors => {

            })
        }

        getAllLocations();
    },[])

    return <section className='section'>

    <div className="container">
      <div className="columns is-multiline">
        {locations.map(location => (
          <div className="column is-one-third" key={location.id}>
            <LocationCard location={location}/>
          </div>
        ))}
        
      </div>
    </div>
  </section>
}
