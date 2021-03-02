import React, { useContext, useState } from 'react'

const Context = React.createContext({})

const infoContinents = [
  { name: 'Africa', region: 'Africa' },
  { name: 'America', region: 'Americas' },
  { name: 'Asia', region: 'Asia' },
  { name: 'Europe', region: 'Europe' },
  { name: 'Oceania', region: 'Oceania' },
]

function CountryContextProvider({ children }) {
  const [continents, setContinents] = useState(infoContinents)
  const [filterCountries, setFilterCountries] = useState({ search: '', filter: '' })
  const [infoModal, setInfoModal] = useState({ show: false, country: {} })
  const [countriesByRegion, setCountriesByRegion] = useState({})

  return <Context.Provider
      value={{ continents, setContinents, filterCountries,
      setFilterCountries, infoModal, setInfoModal, countriesByRegion, setCountriesByRegion }}>
    {children}
  </Context.Provider>
}

const useCountry = () => useContext(Context)

export { CountryContextProvider, useCountry }
