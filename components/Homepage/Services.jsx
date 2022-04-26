import Link from 'next/link'
import React from 'react'

const Services = () => {
  return (
    <div className='flex flex-wrap sm:flex-nowrap sm:w-4/5 justify-center h-[650px] overflow-hidden m-auto sm:justify-between mt-20'>
      <Link href='/web_design'>
        <div className='cursor-pointer w-full sm:w-1/2 m-5  bg-[url("/images/image-web-design-large.jpg")] bg-no-repeat bg-cover rounded-xl flex'>
            <div className='w-fit h-fit m-auto text-white text-center'>
              <h1 className='text-5xl tracking-[2px]'>WEB DESIGN</h1>
              <p className='text-1xl tracking-[5px]'>VIEW PROJECTS</p>
            </div>
        </div>
      </Link>
      <div className='sm:w-1/2 sm:ml-0 m-5 mt-0'>
        <Link href='/app_design'>
          <div className='cursor-pointer w-full mb-5 h-1/2 bg-[url("/images/image-app-design.jpg")] bg-no-repeat bg-cover rounded-xl flex '>
            <div className='w-fit h-fit m-auto text-white text-center'>
              <h1 className='text-5xl tracking-[2px]'>APP DESIGN</h1>
              <p className='text-1xl tracking-[5px]'>VIEW PROJECTS</p>
            </div>
          </div>
        </Link>
        <Link href='/graphic_design'>
          <div className='cursor-pointer w-full h-1/2 bg-[url("/images/image-graphic-design.jpg")] bg-no-repeat bg-cover rounded-xl flex'>
            <div className='w-fit h-fit m-auto text-white  text-center'>
              <h1 className='text-5xl tracking-[2px]'>GRAPHIC DESIGN</h1>
              <p className='text-1xl tracking-[5px]'>VIEW PROJECTS</p>
            </div>
          </div>    
        </Link>
      </div>
    </div>
  )
}

export default Services