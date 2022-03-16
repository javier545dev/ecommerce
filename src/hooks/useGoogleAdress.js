import { useState, useEffect } from 'react'
import axios from 'axios'

const useGoogleAdress = (adress) => {
  const [map, setMap] = useState({})
  const API = `https:maps.googleapis.com/maps/api/geocode/json?adress=${adress}&key=${process.env.GOOGLE_MAPS_API}`

  useEffect(async () => {
    const response = await axios.get(API)
    setMap(response.data.results[0].geometry.location)
  }, [])
  return map
}

export default useGoogleAdress
