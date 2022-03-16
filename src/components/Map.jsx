import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const Map = () => {
  const mapStyles = {
    height: '50vh',
    width: '100%'
  }

  const defaultCenter = {
    lat: 19.4268,
    lng: -99.17
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
