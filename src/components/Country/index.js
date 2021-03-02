import React from 'react'
import { useCountry } from '../../context/CountryContext'
import Favorite from '../ModalFavorite/img/favorite.png'

import './styles.css'

export default function Country({ country }) {
  const { setInfoModal, filterCountries } = useCountry()
  const showInfoCountry = () => {
    setInfoModal({ show: true, country })
  }

  return (
    <div className="content-country" onClick={showInfoCountry}>
      <div className="country-flag">
        <div>
          <img src={country.flag} alt={country.name} />
        </div>
      </div>
      <div className="country-name">
        <span>{country.name}</span>
        { filterCountries.filter === 'Favorites' ? <span className="list-icon-favorite"><img src={Favorite} alt="favorite" /> </span>: null }
      </div>
    </div>
  )
}
