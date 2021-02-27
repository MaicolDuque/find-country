import React, { useState } from 'react'

import { useCountry } from '../../context/CountryContext'
import lupa from './img/lupa.png'
import './styles.css'

export default function Search() {
  const { continents, setFilterCountries } = useCountry()
  const [ infoSearch, setInfoSearch ] = useState({ search: '', filter: '' })
  const handleChange = ({ target }) => {
    const { name, value } = target
    setInfoSearch({ ...infoSearch, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setFilterCountries(infoSearch)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="content-search">
        <input type="text" name="search" value={infoSearch.search} placeholder="Search country" onChange={handleChange} />
        <div className="content-select">
          <select name="filter" onChange={handleChange} value={infoSearch.filter}>
            <option value="">Show All</option>
            { continents.map(( continent ) => <option key={continent.region}>{continent.name}</option> ) }
          </select>
        </div>
        <div className="content-search-lupa" onClick={handleSubmit}>
          <img src={lupa} alt="Lupa" />
        </div>
      </div>
    </form>
  )
}
