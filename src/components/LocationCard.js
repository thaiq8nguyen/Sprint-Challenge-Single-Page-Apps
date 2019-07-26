import React from 'react'

export default function LocationCard ({ location }) {
  // image={image}
  return (
    <div className="card">
      <header className="card-header">
        <h1 className="card-header-title">{location.name}</h1>
      </header>
      <div className="card-content">
        <p>Type: <span className="has-text-grey">{location.type}</span></p>
      </div>
      <footer className="card-footer">
        <p>{location.residents.length}&nbsp; residents</p>
      </footer>
    </div>
  )
}
