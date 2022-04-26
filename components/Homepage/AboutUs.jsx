import React from 'react'

const AboutUs = () => {
  return (
    <div className='flex flex-wrap w-4/5 sm:h-[650px] overflow-hidden m-auto justify-between mt-20'>
      <div className='sm:w-1/3 my-10 sm:m-auto text-center flex flex-col'>
        <img className='w-52 m-auto bg-[url("/images/bg-pattern-small-circle.svg")] bg-no-repeat bg-cover rounded-xl' src="/images/illustration-passionate.svg" alt="" />
        <h1 className='text-2xl my-5 tracking-[5px]'>PASSIONATE</h1>
        <p className='text-base my-5 sm:w-3/4 m-auto leading-[26px]'>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
      </div>
      <div className='sm:w-1/3 my-10 sm:m-auto text-center flex flex-col'>
        <img className='w-52 m-auto bg-[url("/images/bg-pattern-small-circle.svg")] bg-no-repeat bg-cover rounded-xl' src="/images/illustration-resourceful.svg" alt="" />
        <h1 className='text-2xl my-5 tracking-[5px]'>RESOURCEFUL</h1>
        <p className='text-base my-5 sm:w-3/4 m-auto leading-[26px]'>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
      </div>
      <div className='sm:w-1/3 my-10 sm:m-auto text-center flex flex-col'>
        <img className='w-52 m-auto bg-[url("/images/bg-pattern-small-circle.svg")] bg-no-repeat bg-cover rounded-xl' src="images/illustration-friendly.svg" alt="" />
        <h1 className='text-2xl my-5 tracking-[5px]'>FRIENDLY</h1>
        <p className='text-base my-5 sm:w-3/4 m-auto leading-[26px]'> We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
      </div>
    </div>
  )
}

export default AboutUs