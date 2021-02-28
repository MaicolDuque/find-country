
export const getFavoritesCountries = () => {
  return JSON.parse(localStorage.getItem('favoritesCountries'))
}

export const addFavoriteCountry = (country) => {
  const currentCountries = getFavoritesCountries()
  if (!currentCountries) return false
  if (currentCountries[country.region]) {
    const updatedRegion = [...currentCountries[country.region], country]
    return localStorage.setItem('favoritesCountries', JSON.stringify({ ...currentCountries, [country.region]: updatedRegion }))
  }
  return localStorage.setItem('favoritesCountries', JSON.stringify({ [country.region]: country }))
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
