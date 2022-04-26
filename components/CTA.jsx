import React from 'react'

const CTA = () => {
  return (
    <div className='bg-[#E7816B] rounded-2xl flex flex-col sm:flex-row sm:w-4/5 overflow-hidden m-auto justify-between mt-20 text-white'>
      <div className='sm:w-1/2 flex my-10'>
        <div className='w-3/4 text-center m-auto'>
          <h1 className='text-5xl my-8'>Let's talk about your project</h1>
          <p className='text-base'>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
        </div>
      </div>
      <div className='relative sm:w-1/2 my-8 flex '>
        <img className='absolute top-0 right-0 w-30' src="/images/bg-pattern-three-circles.svg" alt="" />
        <a href="/contact" className='w-fit p-4 rounded-xl bg-white m-auto text-black tracking-[1px] hover:bg-[#FFAD9B] hover:text-white z-20'>
          <button>GET IN TOUCH</button>
        </a>
      </div>

    </div>
  )
}

export default CTA