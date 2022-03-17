import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const Map = ({ data }) => {
  const mapStyles = {
    height: '50vh',
    width: '100%'
  }
  console.log(data)
  console.log(location)
  const defaultCenter = {
    lat: data.lat,
    lng: data.lng
  }
  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map
