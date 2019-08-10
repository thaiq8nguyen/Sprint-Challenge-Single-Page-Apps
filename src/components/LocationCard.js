import React from 'react'

export default function LocationCard ({ location }) {
  const tagsStyles = {
    borderRadius: "0"
  }
  return (
    <div className="card">
      <header className="card-header has-background-danger">
        <h1 className="card-header-title has-text-white">{location.name}</h1>
      </header>
      <div className="card-content">
        <p>Type: <span className="has-text-grey">{location.type}</span></p>
      </div>
      
        <div className="level">
          <div className="level-left"></div>
          <div className="level-right">
            
            <div className="tags has-addons is-medium is-danger level-item">
              <span className="tag" style={tagsStyles}>Residents</span>
              <span className="tag is-danger" style={tagsStyles}>{location.residents.length}</span>
            </div>
            
          </div>
        </div>
        
      
    </div>
  )
}
