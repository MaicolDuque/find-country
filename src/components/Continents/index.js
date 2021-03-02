import React, { useEffect, useState } from 'react'

import { useCountry } from '../../context/CountryContext'
import { areThereAnyFavorite, hasCountryFavorites, isFavorite } from '../../services/db'
import getCountriesByRegion from '../../services/getCountriesByRegion'
import Continent from '../Continent'
import './styles.css'


const filterAllCountries = (filter, search, countries) => {
  if (filter === 'Favorites') {
    return countries?.filter(country => isFavorite(country) && country.name.toLowerCase().includes(search.toLowerCase()))
  }
  return countries?.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))
}

let countriesRendered = { Africa: 0, America: 0, Asia: 0, Europe: 0, Oceania: 0 }

export default function Continents() {
  const { continents, filterCountries, setCountriesByRegion } = useCountry()
  const { search, filter } = filterCountries
  const [regions, setRegions] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getCountriesByRegion()
      .then(regions => {
        setLoading(false)
        setRegions(regions)
        setCountriesByRegion(regions)
      })
  }, [])

  const calculateCant = (countries, name) => {
    const currentCountries = filterAllCountries(filter, search, countries)
    const sorted = currentCountries?.sort((a, b) => a.name.localeCompare(b.name))
    countriesRendered = { ...countriesRendered, [name]: sorted?.length }
    return sorted
  }

  const validateContentNotFound = () => {
    const cantCountries = Object.values(countriesRendered).reduce((acc, cur) => acc + cur, 0)
    if (filter === 'Favorites') return areThereAnyFavorite(search) && Boolean(cantCountries)
    return Boolean(cantCountries)
  }

  return (
    <>
      <>
        <div className="content-continents">
          {continents.map(continent => {
            if (continent.region.includes(filter) || (hasCountryFavorites(continent.region) && filter === 'Favorites')) {
              return <Continent key={continent.region} countries={calculateCant(regions[continent.region], continent.name)} name={continent.name} />
            }
            return null
          })
          }
        </div>

        {
          !validateContentNotFound() && !loading ?
            <div className="content-not-found">
              <p>No results found</p>
            </div>
            : null
        }
      </>
    </>
  )
}
