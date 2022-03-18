import { useState, useEffect } from 'react'
import axios from 'axios'

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({})
  const replaced = address.split(' ').join('+')
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${replaced}&key=${process.env.GOOGLE_MAPS_API}`
  useEffect(async () => {
    const response = await axios(API)
    setMap(response.data.results[0].geometry.location)
    setTimeout(() => {}, 2000)
  }, [])

  return map
}

export default useGoogleAddress
