import { useState } from 'react'
import initialState from '../initialState'

const useInitialState = () => {
  const [state, setState] = useState(initialState)

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload]
    })
  }

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    })
  }

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload]
    })
  }

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.cartId !== payload)
    })
  }

  return {
    addToCart,
    addToBuyer,
    addNewOrder,
    removeFromCart,
    state
  }
}

export default useInitialState
