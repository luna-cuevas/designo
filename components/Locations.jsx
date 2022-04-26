import React from 'react'

const Locations = () => {
  return (
    <div className='w-10/12 m-auto text-center md:flex text-white'>
        <div className='w-fit m-auto my-16'>
          <div className='relative w-fit m-auto'>
            <img className='absolute' src="/images/bg-pattern-small-circle.svg" alt="" />
            <img src="/images/illustration-canada.svg" alt="" />
          </div>
          <h1 className='text-[#333136] text-[20px] tracking-[5px] my-6'>CANADA</h1>
          <button className='bg-[#E7816B] p-4 rounded-xl hover:bg-[#FFAD9B] hover:text-white'><a href="/locations">SEE LOCATION</a></button>
        </div>
        <div className='w-fit m-auto my-16'>
          <div className='relative w-fit m-auto'>
            <img className='absolute' src="/images/bg-pattern-small-circle.svg" alt="" />
            <img src="/images/illustration-australia.svg" alt="" />
          </div>
          <h1 className='text-[#333136] text-[20px] tracking-[5px] my-6'>AUSTRALIA</h1>
          <button className='bg-[#E7816B] p-4 rounded-xl hover:bg-[#FFAD9B] hover:text-white'><a href="/locations">SEE LOCATION</a></button>
        </div>
        <div className='w-fit m-auto my-16'>
          <div className='relative w-fit m-auto'>
            <img className='absolute' src="/images/bg-pattern-small-circle.svg" alt="" />
            <img src="/images/illustration-united-kingdom.svg" alt="" />
          </div>
          <h1 className='text-[#333136] text-[20px] tracking-[5px] my-6'>UNITED KINGDOM</h1>
          <button className='bg-[#E7816B] p-4 rounded-xl hover:bg-[#FFAD9B] hover:text-white'><a href="/locations">SEE LOCATION</a></button>
        </div>
      </div>
  )
}

export default Locations