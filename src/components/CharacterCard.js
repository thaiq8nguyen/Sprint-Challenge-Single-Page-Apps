import React from 'react'

export default function CharacterCard ({ character }) {
  const cardStyles = {
    height: "100%"
  }
  return (
    <div className="card" style={cardStyles}>
      <div className="card-image">
        <figure className="image">
          <img src={character.image} alt=""/>
        </figure>
      </div>
      <div className="card-content">
        <h1 className="title">{character.name}</h1>
        <p>{character.species}&nbsp;{character.status}</p>
        <p>Location: <span className="has-text-grey">{character.location.name}</span></p>

      </div>
    </div>
  )
}
