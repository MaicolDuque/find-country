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
  const [countriesRendered, setCountriesRendered] = useState({ Africa: 0, America: 0, Asia: 0, Europe: 0, Oceania: 0 })

  return <Context.Provider
      value={{ continents, setContinents, filterCountries, setFilterCountries, countriesRendered, setCountriesRendered }}>
    {children}
  </Context.Provider>
}

const useCountry = () => useContext(Context)

export { CountryContextProvider, useCountry }
