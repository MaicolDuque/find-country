import React from 'react'

import './styles.css'

export default function Country({ country }) {
  return (
    <div className="content-country">
      <div className="country-flag">
        <div>
          <img src={country.flag} alt={country.name} />
        </div>
      </div>
      <div className="country-name">
        {country.name}
      </div>
    </div>
  )
}
