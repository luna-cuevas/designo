import React from 'react'
import Link from 'next/link'

const web_design_data = [
  {"title": "TIM BROWN", "image": "/images/image-change.jpg", "description": "A book cover designed for Tim Brown’s new release, ‘Change’"},
  {"title": "BOXED WATER", "image": "/images/image-boxed-water.jpg", "description": "A simple packaging concept made for Boxed Water"},
  {"title": "SCIENCE!", "image": "/images/image-science.jpg", "description": "A poster made in collaboration with the Federal Art Project"},
]

const graphic_design = () => {
  return (
    <div className='text-white'>
      <div className='w-full relative overflow-hidden bg-[#E7816B] p-5 m-auto md:h-[250px] md:w-3/4 md:rounded-xl'>
        <img className='absolute w-1/2' src="/images/bg-pattern-mdall-circle.svg" alt="" />
        <div className='w-11/12 p-10 m-auto text-center'>
          <h1 className='mb-5 text-4xl'>Graphic Design</h1>
          <p className='md:w-1/2 md:m-auto'>We deliver eye-catching branding materials that are tailored to meet your business objectives.</p>
        </div>
      </div>
      <div className='flex md:w-3/4 flex-wrap justify-center m-auto'>
        {web_design_data.map(item => {
          return (
            <div className='p-5 flex md:w-1/3'>
              <a className='cursor-grab group'>
                <div className='h-[478px] w-[350px] bg-[#FDF3F0] hover:bg-[#E7816B] text-center rounded-xl'>
                  <img className='rounded-xl w-fit' src={item.image} alt="" />
                  <h1 className='text-[#E7816B] group-hover:text-white text-xl tracking-[5px] my-4'>{item.title}</h1>
                  <p className='text-black group-hover:text-white w-10/12 m-auto'>{item.description}</p>
                </div>
              </a>
            </div>
          )
        })}
      </div>
      <div className='flex flex-wrap md:flex-nowrap md:w-4/5 justify-center h-[650px] md:h-[350px] overflow-hidden m-auto md:justify-between mt-20'>
        <Link href='/app_design'>
          <div className='cursor-pointer w-full md:w-1/2 m-5 bg-[url("/images/image-app-design.jpg")] bg-no-repeat bg-cover rounded-xl flex'>
              <div className='w-fit h-fit m-auto text-white text-center'>
                <h1 className='text-5xl tracking-[2px]'>APP DESIGN</h1>
                <p className='text-1xl tracking-[5px]'>VIEW PROJECTS</p>
              </div>
          </div>
        </Link>
        <Link href='/web_design'>
          <div className='cursor-pointer w-full md:w-1/2 m-5 bg-[url("/images/image-web-design-large.jpg")] bg-no-repeat bg-cover rounded-xl flex'>
              <div className='w-fit h-fit m-auto text-white text-center'>
                <h1 className='text-5xl tracking-[2px]'>WEB DESIGN</h1>
                <p className='text-1xl tracking-[5px]'>VIEW PROJECTS</p>
              </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default graphic_design