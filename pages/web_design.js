import React from 'react'
import Link from 'next/link'

const web_design_data = [
  {"title": "EXPRESS", "image": "/images/image-express.jpg", "description": "A multi-carrier shipping website for ecommerce businesses"},
  {"title": "TRANSFER", "image": "/images/image-transfer.jpg", "description": "Site for low-cost money transfers and sending money within seconds"},
  {"title": "PHOTON", "image": "/images/image-photon.jpg", "description": "A state-of-the-art music player with high-resolution audio and DSP effects"},
  {"title": "BUILDER", "image": "/images/image-builder.jpg", "description": "Connects users with local contractors based on their location"},
  {"title": "BLOGR", "image": "/images/image-blogr.jpg", "description": "Blogr is a platform for creating an online blog or publication"},
  {"title": "CAMP", "image": "/images/image-camp.jpg", "description": "Get expert training in coding, data, design, and digital marketing"}
]

const web_design = () => {
  return (
    <div className='text-white'>
      <div className='w-full bg-[#E7816B] relative overflow-hidden p-5 m-auto md:h-[250px] md:w-3/4 md:rounded-xl'>
        <img className='absolute w-1/2' src="/images/bg-pattern-small-circle.svg" alt="" />
        <div className='w-11/12 p-10 m-auto text-center'>
          <h1 className='mb-5 text-4xl'>Web Design</h1>
          <p className='md:w-1/2 md:m-auto'>We build websites that serve as powerful marketing tools and bring memorable brand experiences.</p>
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
        <Link href='/graphic_design'>
          <div className='cursor-pointer w-full md:w-1/2 m-5 bg-[url("/images/image-graphic-design.jpg")] bg-no-repeat bg-cover rounded-xl flex'>
              <div className='w-fit h-fit m-auto text-white text-center'>
                <h1 className='text-5xl tracking-[2px]'>GRAPHIC DESIGN</h1>
                <p className='text-1xl tracking-[5px]'>VIEW PROJECTS</p>
              </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default web_design