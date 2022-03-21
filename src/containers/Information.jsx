import React, { useRef, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import AppContext from '../context/AppContext'
import '../styles/components/Information.css'

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext)
  const form = useRef(null)
  const { cart } = state
  const history = useHistory()

  const handleSubmit = () => {
    const formData = new FormData(form.current)
    const buyer = {
      name:
        formData.get('name').charAt(0).toUpperCase() +
        formData.get('name').slice(1),
      lastname:
        formData.get('lastname').charAt(0).toUpperCase() +
        formData.get('lastname').slice(1),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      cp: formData.get('cp'),
      phone: formData.get('phone')
    }
    addToBuyer(buyer)
    history.push('/checkout/payment')
  }

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre" name="name" />
            <input type="text" placeholder="Apellido" name="lastname" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo Postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div className="Information-element" key={item.cartId}>
            <h4>{item.title}</h4>
            <span>${item.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Information
