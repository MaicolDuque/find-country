import React, { useContext, useState } from 'react'

const Context = React.createContext({})

const infoContinents = [
  { name: 'Asia', region: 'Asia' },
  { name: 'Africa', region: 'Africa' },
  { name: 'America', region: 'Americas' },
  { name: 'Europe', region: 'Europe' },
  { name: 'Oceania', region: 'Oceania' },
]

function CountryContextProvider({ children }) {
  const [continents, setContinents] = useState(infoContinents)
  const [filterCountries, setFilterCountries] = useState({ search: '', filter: '' })

  return <Context.Provider
      value={{ continents, setContinents, filterCountries, setFilterCountries }}>
    {children}
  </Context.Provider>
}

const useCountry = () => useContext(Context)

export { CountryContextProvider, useCountry }
