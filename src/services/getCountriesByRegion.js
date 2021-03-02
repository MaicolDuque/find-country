import { API_URL } from './config'

const groupCountriesByRegion = (acc, country) => {
  if (acc[country.region]) {
    acc[country.region] = [...acc[country.region], country]
  } else {
    acc[country.region] = [country]
  }
  acc['codes'][country.alpha3Code] = country.name
  return acc
}

const fromApiResponseToCountries = apiResponse => {
  const groupedByRegion = apiResponse.reduce(groupCountriesByRegion, { codes: {} })
  return groupedByRegion
}

export default function getCountriesByRegion() {
  return fetch(`${API_URL}`)
    .then(res => res.json())
    .then(fromApiResponseToCountries)
}
