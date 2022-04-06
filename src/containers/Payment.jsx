import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { PayPalButton } from 'react-paypal-button-v2'
import AppContext from '../context/AppContext'
import '../styles/components/Payment.css'

const Payment = () => {
  const { state, addNewOrder, removeAllFromCart } = useContext(AppContext)
  const { cart, buyer } = state
  const history = useNavigate()

  const PaypalOptions = {
    cliendId: process.env.PAYPAL_PAYMENT_CLIENT_ID,
    intent: 'capture',
    currenct: 'USD'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder)
      history('/checkout/success')
      removeAllFromCart(cart)
    }
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price
    const sum = cart.reduce(reducer, 0)
    return sum
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del Pedido</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.cartId}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="Payment-button">
        <PayPalButton
          paypalOptions={PaypalOptions}
          buttonStyles={buttonStyles}
          amount={handleSumTotal()}
          onSuccess={(data) => handlePaymentSuccess(data)}
          onError={(error) => console.log('no paso', error)}
          onCancel={(data) => console.log(data)}
        />
      </div>
    </div>
  )
}

export default Payment
