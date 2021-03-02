
export const getFavoritesCountries = () => {
  return JSON.parse(localStorage.getItem('favoritesCountries')) || ''
}

export const addFavoriteCountry = (country) => {
  const currentCountries = getFavoritesCountries()
  if (!currentCountries || !currentCountries[country.region]){
    return localStorage.setItem('favoritesCountries', JSON.stringify({ ...currentCountries, [country.region]: [country] }))
  }
  const updatedRegion = [...currentCountries[country.region], country]
  return localStorage.setItem('favoritesCountries', JSON.stringify({ ...currentCountries, [country.region]: updatedRegion }))
}

export const deleteFavoriteCountry = (country) => {
  const currentCountries = getFavoritesCountries()
  if (!currentCountries) return false
  const newCountriesRegion = currentCountries[country.region].filter(co => co.name !== country.name)
  localStorage.setItem('favoritesCountries', JSON.stringify({ ...currentCountries, [country.region]: newCountriesRegion }))
}

export const isFavorite = (country) => {
  const currentCountries = getFavoritesCountries()
  if (!currentCountries) return false
  if (!currentCountries[country.region]) return false
  return currentCountries[country.region].some(co => co.name === country.name)
}

export const hasCountryFavorites = (region) => {
  const currentCountries = getFavoritesCountries()
  if (!currentCountries) return false
  if (!currentCountries[region]) return false
  return currentCountries[region].length
}

export const areThereAnyFavorite = () => {
  const currentCountries = getFavoritesCountries()
  if (!currentCountries) return false // to validate when we have not yet added favorites.
  const objectKeys = Object.keys(currentCountries)
  return objectKeys.some(region => currentCountries[region].length > 0)
}
