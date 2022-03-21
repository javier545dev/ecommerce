import { useState, useEffect } from 'react'
import axios from 'axios'

const useGoogleAddress = ({ address, city, province, country, cp }) => {
  const [map, setMap] = useState({ lat: 0, lng: 0 })
  const replaced = address.split(' ').join('+')
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${replaced}${city}${province}${country}${cp}&key=${process.env.GOOGLE_MAPS_API}`
  useEffect(async () => {
    const response = await axios(API)
    setMap(response.data.results[0].geometry.location)
    setTimeout(() => {}, 2000)
  }, [])

  return map
}

export default useGoogleAddress
