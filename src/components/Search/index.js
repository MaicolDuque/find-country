import React from 'react'

import lupa from './img/lupa.png'
import './styles.css'

export default function Search() {
  return (
    <form>
      <div className="content-search">
        <input type="text" placeholder="Search country" />
        <div className="content-select">
          <select>
            <option>Show All</option>
            <option>Primera</option>
            <option>Primera</option>
          </select>
        </div>
        <div className="content-search-lupa">
          <img src={lupa} alt="Lupa" />
        </div>
      </div>
    </form>
  )
}
