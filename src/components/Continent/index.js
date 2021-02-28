import React from 'react'

import Country from '../Country'
import './styles.css'

export default function Continent({ name, countries = [] }) {
  return (
    <>
      { countries.length ?
        <div className="container-continent">
          <h3 className="name-continent">{name}</h3>
          { countries.map( country => <Country key={country.name} country={country} />) }
        </div>
        : null
      }
    </>
  )
}
