import React from 'react'

import Continents from '../../components/Continents'
import Header from '../../components/Header'
import ModalFavorite from '../../components/ModalFavorite'
import { useCountry } from '../../context/CountryContext'

export default function Home() {
  const { infoModal } = useCountry()
  return (
    <>
      <Header />
      <Continents />
      { infoModal.show && <ModalFavorite /> }
    </>
  )
}
