import React, { useEffect, useState } from 'react'

import { useCountry } from '../../context/CountryContext'
import { hasCountryFavorites, isFavorite } from '../../services/db'
import getCountriesByRegion from '../../services/getCountriesByRegion'
import Continent from '../Continent'
import './styles.css'


const filterAllCountries = (filter, search, countries) => {
  if (filter === 'Favorites') {
    return countries?.filter(country => isFavorite(country) && country.name.toLowerCase().includes(search.toLowerCase()))
  }
  return countries?.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))
}

let countriesRendered = { Africa: 0, America: 0, Asia: 0, Europe: 0, Oceania: 0, Favorites: 0 }

export default function Continents() {
  const { continents, filterCountries } = useCountry()
  const { search, filter } = filterCountries
  const [regions, setRegions] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getCountriesByRegion()
      .then(regions => {
        setLoading(false)
        setRegions(regions)
      })
  }, [])

  const calculateCant = (countries, name) => {
    const currentCountries = filterAllCountries(filter, search, countries)
    const sorted = currentCountries?.sort((a, b) => a.name.localeCompare(b.name))
    countriesRendered = { ...countriesRendered, [name]: sorted?.length }
    return sorted
  }

  const validateContentNotFound = () => {
    if (filter !== '') return Boolean(countriesRendered[filter])
    const cantCountries = Object.values(countriesRendered).reduce((acc, cur) => acc + cur, 0)
    return Boolean(cantCountries)
  }

  return (
    <>
      { loading ? 'Cargando...' :
        <>
          <div className="content-continents">
            {continents.map(continent => {
              if (continent.region.includes(filter) || hasCountryFavorites(continent.region)) {
                return <Continent key={continent.region} countries={calculateCant(regions[continent.region], continent.name)} name={continent.name} />
              }
              if (hasCountryFavorites(continent.region)) {
                countriesRendered = { ...countriesRendered, Favorites: 1 }
              } else {
                countriesRendered = { ...countriesRendered, Favorites: 0 }
              }
              return null
            })
            }
          </div>

          {
            !validateContentNotFound() ?
              <div className="content-not-found">
                <p>No results found</p>
              </div>
              : null
          }
        </>
      }
    </>
  )
}
