import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import Map from '../components/Map'
import useGoogleAdress from '../hooks/useGoogleAdress'
import '../styles/components/Success.css'

const Success = () => {
  const { state } = useContext(AppContext)
  const { buyer } = state
  const location = useGoogleAdress(buyer[0].adress)
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer[0].name} Gracias por tu compra`}</h2>
        <span>tu pedido llegara en 3 dias a tu direccion:</span>
        <div className="Success-map">
          <Map data={location} />
        </div>
      </div>
    </div>
  )
}

export default Success
