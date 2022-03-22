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

  const onFocus = (event) => {
    event.target.parentElement.classList.add('is-active')
    event.target.parentElement.classList.add('is-completed')
  }

  const onFocusOut = (event) => {
    const data = event.target.value
    if (data === '') {
      event.target.parentElement.classList.remove('is-active')
      event.target.parentElement.classList.remove('is-completed')
    }
  }

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto</h2>
        </div>

        <form ref={form} className="Information-form">
          <div id="input" className="div-container">
            <label className="label-container"> Nombre </label>
            <input
              type="text"
              name="name"
              onFocus={onFocus}
              onBlur={onFocusOut}
            />
          </div>

          <div className="div-container">
            <label className="label-container"> Apellido </label>
            <input
              type="text"
              name="lastname"
              onFocus={onFocus}
              onBlur={onFocusOut}
            />
          </div>

          <div className="div-container">
            <label className="label-container"> Correo Electronico </label>
            <input
              type="text"
              name="email"
              onFocus={onFocus}
              onBlur={onFocusOut}
            />
          </div>

          <div className="div-container">
            <label className="label-container"> Direccion </label>
            <input
              type="text"
              name="address"
              onFocus={onFocus}
              onBlur={onFocusOut}
            />
          </div>

          <div className="div-container">
            <label className="label-container"> Apartamento </label>
            <input
              type="text"
              name="apto"
              onFocus={onFocus}
              onBlur={onFocusOut}
            />
          </div>

          <div className="div-container">
            <label className="label-container"> Ciudad </label>
            <input
              type="text"
              name="city"
              onFocus={onFocus}
              onBlur={onFocusOut}
            />
          </div>

          <div className="div-container">
            <label className="label-container"> Pais </label>
            <input
              type="text"
              name="country"
              onFocus={onFocus}
              onBlur={onFocusOut}
            />
          </div>

          <div className="div-container">
            <label className="label-container"> Estado </label>
            <input
              type="text"
              name="state"
              onFocus={onFocus}
              onBlur={onFocusOut}
            />
          </div>

          <div className="div-container">
            <label className="label-container"> Codigo Postal </label>
            <input
              type="text"
              name="cp"
              onFocus={onFocus}
              onBlur={onFocusOut}
            />
          </div>

          <div className="div-container">
            <label className="label-container"> Telefono </label>
            <input
              type="text"
              name="phone"
              onFocus={onFocus}
              onBlur={onFocusOut}
            />
          </div>
        </form>

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
