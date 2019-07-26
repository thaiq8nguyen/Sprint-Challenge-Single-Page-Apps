import React from 'react';

export default function Header() {

  const navStyles = {
    justifyContent: "center"
  }
  return (

    <nav className="navbar is-light" style={navStyles}>
      <div className="navbar-brand">
        <h1 className="navbar-item is-size-4 has-text-weight-bold">Rick & Morty Fan Page</h1>
      </div>
    </nav>
  )
}