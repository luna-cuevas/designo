import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#1D1C1E] text-white pt-20 pb-20'>
      <div className='flex flex-col sm:flex-row justify-between sm:w-3/4 m-auto pb-10 border-b-2 border-b-slate-600'>
        <img className='w-72 sm:w-52 mb-10 sm:mb-auto m-auto' src="/images/logo-light.png" alt="Designo" />
        <div className='flex flex-col sm:flex-row m-auto text-center justify-between w-4/12'>
          <a className='my-4' href="">OUR COMPANY</a>
          <a className='my-4' href="">LOCATIONS</a>
          <a className='my-4' href="">CONTACT</a>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row text-center justify-between w-3/4 m-auto  mt-10'>
        <div className='w-3/4 sm:w-1/6 sm:text-left my-3 m-auto'>
          <h1>Designo Central Office</h1>
          <p>3886 Wellington Street Toronto, Ontario M9C 3J5</p>
        </div>
        <div className='w-3/4 sm:w-fit sm:text-left my-6 sm:my-3 m-auto'>
          <h1>Contact Us (Central Office)</h1>
          <p>P: +1 123-456-7890</p>
          <p>M: contact@designo.com</p>
        </div>
        <div className='flex w-3/4 sm:w-1/3 sm:text-left justify-center my-3 m-auto'>
          <a className='m-auto mx-2' href=""><img src="/images/icon-facebook.svg" alt="Facebook" /></a>
          <a className='m-auto mx-2' href=""><img src="/images/icon-youtube.svg" alt="Youtube" /></a>
          <a className='m-auto mx-2' href=""><img src="/images/icon-twitter.svg" alt="Twitter" /></a>
          <a className='m-auto mx-2' href=""><img src="/images/icon-pinterest.svg" alt="Pinterest" /></a>
          <a className='m-auto mx-2' href=""><img src="/images/icon-instagram.svg" alt="Instagram" /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer