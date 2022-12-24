import { useMetamask } from '@thirdweb-dev/react'
import React from 'react'

function Login() {
    const connectWithMetamask = useMetamask()
  return (
    <div className='bg-[#091B18] min-h-screen flex flex-col items-center justify-center text-center'>
        <div className='flex flex-col items-center mb-10'>
            <img className='rounded-full h-56 w-56 mb-10' src="https://d33wubrfki0l68.cloudfront.net/fcd4ecd90386aeb50a235ddc4f0063cfbb8a7b66/4295e/static/bfc04ac72981166c740b189463e1f74c/40129/eth-diamond-black-white.jpg" alt="" />
            <h1 className='text-6xl text-white font-bold'>THE CRYPTO DRAW</h1>
            <h2 className='text-white'>Get Started by logging in with your MetaMask</h2>
            <button onClick={connectWithMetamask} className='bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold'>
                Login with MetaMask
            </button>
        </div>
    </div>
  )
}

export default Login