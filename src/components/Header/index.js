import React from 'react'

import Search from '../Search'
import world from './World.png'
import './styles.css'

export default function Header() {
  return (
    <header className="App-header">
      <div className="content-description">
        <p className="content-description-info">
          Find any <b className="content-description-secundary">country</b> <br />
          in the world.
        </p>
      </div>
      <div className="content-image">
        <img src={world} alt="World" />
      </div>
      <Search />
    </header>
  )
}
