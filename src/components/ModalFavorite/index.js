import React, { useState } from 'react'

import { useCountry } from '../../context/CountryContext'
import { addFavoriteCountry, deleteFavoriteCountry, isFavorite } from '../../services/db'
import Close from './img/close.png'
import Favorite from './img/favorite.png'
import Unfavorite from './img/unfavorite.png'
import './styles.css'

export default function ModalFavorite() {
  const { setInfoModal, infoModal, countriesByRegion } = useCountry()
  const { country } = infoModal
  const [countryFavorite, setCountryFavorite] = useState(isFavorite(country))

  const getStringNames = (array) => {
    const namesArray = array.map ( info => info.name )
    const stringNames = namesArray.join(", ")
    return stringNames
  }

  const getBordersName = (borders) => {
    const bordersNames = borders.map( code => countriesByRegion['codes'][code])
    return bordersNames.join(", ")
  }

  const addDeleteFavorite = () => {
    if(countryFavorite) {
      setCountryFavorite(false)
      return deleteFavoriteCountry(country)
    }
    setCountryFavorite(true)
    return addFavoriteCountry(country)
  }

  const closeModal = () => {
    setInfoModal({ show: false, country: {} })
  }

  return (
    <div className="container-modal-background" >
      <div className="container-modal">
        <div className="container-modal-info">
          <div className="container-modal-close">
            <img src={Close} alt="close-modal" className="img-close" onClick={closeModal}/>
          </div>
          <div className="container-modal-description">
            <div className="name-country">
              <h2>{country.name}</h2>
              <span className="icon-favorite" onClick={addDeleteFavorite}>
                <img src={countryFavorite ? Favorite : Unfavorite} alt="Favorite" />
              </span>
            </div>
            <ul>
              <li><b className="info-key">Region:</b> {country.region}</li>
              <li><b className="info-key">Population:</b> {country.population}</li>
              <li><b className="info-key">Currency:</b> {getStringNames(country.currencies)}</li>
              <li><b className="info-key">Language:</b> {getStringNames(country.languages)}</li>
              <li><b className="info-key">Border Countries:</b> {getBordersName(country.borders)} </li>
              <li>
                <b className="info-key">Flag:</b><br/>
                <img src={country.flag} alt={country.name} className="country-info-flag" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
