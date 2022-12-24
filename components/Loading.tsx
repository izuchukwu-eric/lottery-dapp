import React from 'react'
import { PropagateLoader } from 'react-spinners'

function Loading() {
  return (
    <div className='bg-[#091B18] h-screen flex flex-col items-center justify-center text-center'>
      <div className='flex items-center space-x-2 mb-10'>
        <img className='rounded-full h-20 w-20' src="https://d33wubrfki0l68.cloudfront.net/fcd4ecd90386aeb50a235ddc4f0063cfbb8a7b66/4295e/static/bfc04ac72981166c740b189463e1f74c/40129/eth-diamond-black-white.jpg" alt="" />
        <h1 className='text-lg text-white font-bold'>Loading the CRYPTO DRAW</h1>
      </div>
      <PropagateLoader color='white' size={30} />
    </div>
  )
}

export default Loading