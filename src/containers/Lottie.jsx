import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../hooks/lottie.json'

const AnimationLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={1000} />
    </div>
  )
}
export default AnimationLottie
