import React from 'react'

const Episode = ({episode}) => {
    return (
        <div className="card">
      <header className="card-header">
        <h1 className="card-header-title">{episode.name}</h1>
      </header>
      <div className="card-content">
        <p>Air Date: <span className="has-text-grey">{episode.air_date}</span></p>
      </div>
      <footer className="card-footer">
        {/* <p>{location.residents.length}&nbsp; residents</p> */}
      </footer>
    </div>
    )
}

export default Episode
