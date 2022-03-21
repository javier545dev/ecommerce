import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { PayPalButton } from 'react-paypal-button-v2'
import AppContext from '../context/AppContext'
import '../styles/components/Payment.css'

const Payment = () => {
  const { state, addNewOrder, removeAllFromCart } = useContext(AppContext)
  const { cart, buyer } = state
  const history = useHistory()

  const paypalOptions = {
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
      history.push('/checkout/success')
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
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onSuccess={(data) => handlePaymentSuccess(data)}
            onError={(error) => console.log(error)}
            onCancel={(data) => console.log(data)}
          />
        </div>
      </div>
    </div>
  )
}

export default Payment
