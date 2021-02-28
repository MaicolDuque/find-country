import { API_URL } from './config'

const groupCountriesByRegion = (acc, country) => {
  if (acc[country.region]) {
    acc[country.region] = [...acc[country.region], country]
  } else {
    acc[country.region] = [country]
  }
  return acc
}

const fromApiResponseToCountries = apiResponse => {
  const groupedByRegion = apiResponse.reduce(groupCountriesByRegion, {})
  return groupedByRegion
}

export default function getCountriesByRegion() {
  return fetch(`${API_URL}`)
    .then(res => res.json())
    .then(fromApiResponseToCountries)
}
