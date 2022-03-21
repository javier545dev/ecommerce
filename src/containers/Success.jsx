import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import Map from '../components/Map'
import useGoogleAddress from '../hooks/useGoogleAddress'
import '../styles/components/Success.css'

const Success = () => {
  const { state } = useContext(AppContext)
  const { buyer } = state
  const location = useGoogleAddress(buyer[buyer.length - 1])
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer[0].name} ${buyer[0].lastname}...`}</h2>
        <h3>Gracias por su compra </h3>
        <span>Tu pedido llegara en 3 dias a tu direccion:</span>
        <div className="Success-map">
          {location === undefined ? (
            <p>Cargando...</p>
          ) : (
            <Map location={location} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Success
