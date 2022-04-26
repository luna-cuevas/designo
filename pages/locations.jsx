import React from 'react'

const locations = () => {
  return (
    <div className='mt-10'>

      <img className='w-full md:hidden' src="/images/image-map-canada.png" alt="" />
      <div className='relative overflow-hidden md:w-3/4 h-[400px] bg-[#FDF3F0] rounded-2xl flex m-auto mb-10 md:my-10'>
        <div className='w-4/5 md:w-3/5 text-center m-auto'>
          <img className='absolute' src="/images/bg-pattern-three-circles.svg" alt="" />
          <h1 className='md:w-3/4 m-auto text-[#E7816B] text-[40px] font-bold mb-5'>Canada</h1>
          <div className='flex md:w-3/4 justify-between m-auto flex-col md:flex-row'>
            <div className='mb-6 md:my-auto'>
              <h1 className='font-bold'>Designo Central Office</h1>
              <p>3886 Wellington Street <br /> Toronto, Ontario M9C 3J5</p>
            </div>
            <div>
              <h1 className='font-bold'>Contact</h1>
              <p>P : +1 253-863-8967 <br /> M : contact@designo.co</p>
            </div>
          </div>
        </div>
        <img className='hidden md:block w-2/5 p-2 rounded-2xl' src="/images/image-map-canada.png" alt="" />
      </div>
      
      <img className='w-full md:hidden' src="/images/image-map-australia.png" alt="" />
      <div className='relative overflow-hidden md:w-3/4 h-[400px] bg-[#FDF3F0] rounded-2xl flex m-auto mb-10 md:my-10'>
        <img className='hidden md:block w-2/5 p-2 rounded-2xl' src="/images/image-map-australia.png" alt="" />
        <img className='absolute top-0 right-0' src="/images/bg-pattern-three-circles.svg" alt="" />
        <div className='w-4/5 md:w-3/5 text-center m-auto'>
          <h1 className='md:w-3/4 m-auto text-[#E7816B] text-[40px] font-bold mb-5'>Australia</h1>
          <div className='flex md:w-3/4 justify-between m-auto flex-col md:flex-row'>
            <div className='mb-6 md:my-auto'>
              <h1 className='font-bold'>Designo AU Office</h1>
              <p>19 Balonne Street <br /> New South Wales 2443</p>
            </div>
            <div>
              <h1 className='font-bold'>Contact</h1>
              <p>P : (02) 6720 9092 <br /> M : contact@designo.au</p>
            </div>
          </div>
        </div>
      </div>

      <img className='w-full md:hidden' src="/images/image-map-united-kingdom.png" alt="" />
      <div className='relative overflow-hidden md:w-3/4 h-[400px] bg-[#FDF3F0] rounded-2xl flex m-auto mb-10 md:my-10'>
        <img className='absolute' src="/images/bg-pattern-three-circles.svg" alt="" />
        <div className='w-4/5 md:w-3/5 text-center m-auto'>
          <h1 className='md:w-3/4 m-auto text-[#E7816B] text-[40px] font-bold mb-5'>United Kingdom</h1>
          <div className='flex md:w-3/4 justify-between m-auto flex-col md:flex-row'>
            <div className='mb-6 md:my-auto'>
              <h1 className='font-bold'>Designo UK Office</h1>
              <p>13  Colorado Way <br />  Rhyd-y-fro SA8 9GA</p>
            </div>
            <div>
              <h1 className='font-bold'>Contact</h1>
              <p>P : 078 3115 1400 <br /> M : contact@designo.uk</p>
            </div>
          </div>
        </div>
        <img className='hidden md:block w-2/5 p-2 rounded-2xl' src="/images/image-map-united-kingdom.png" alt="" />
      </div>
    </div>
  )
}

export default locations