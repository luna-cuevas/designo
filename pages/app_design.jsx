import React from 'react'
import Link from 'next/link'

const app_design_data = [
  {"title": "AIRFILTER", "image": "/images/image-airfilter.jpg", "description": "Solving the problem of poor indoor air quality by filtering the air"},
  {"title": "EYECAM", "image": "/images/image-eyecam.jpg", "description": "Product that lets you edit your favorite photos and videos at any time"},
  {"title": "FACEIT", "image": "/images/image-faceit.jpg", "description": "Get to meet your favorite internet superstar with the faceit app"},
  {"title": "TODO", "image": "/images/image-todo.jpg", "description": "A todo app that features cloud sync with light and dark mode"},
  {"title": "LOOPSTUDIOS", "image": "/images/image-loopstudios.jpg", "description": "A VR experience app made for Loopstudios"},
]
const app_design = () => {
  return (
    <div className='text-white'>
      <div className='w-full relative overflow-hidden bg-[#E7816B] p-5 m-auto md:h-[250px] md:w-3/4 md:rounded-xl'>
      <img className='absolute w-1/2' src="/images/bg-pattern-small-circle.svg" alt="" />
        <div className='w-11/12 p-10 m-auto text-center'>
          <h1 className='mb-5 text-4xl'>App Design</h1>
          <p className='md:w-1/2 md:m-auto'>Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.</p>
        </div>
      </div>
      <div className='flex md:w-3/4 justify-center flex-wrap m-auto'>
        {/* I take the data array and iterate through each to show title, image, and description */}
        {app_design_data.map(item => {
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
        <Link href='/web_design'>
          <div className='cursor-pointer w-full md:w-1/2 m-5 bg-[url("/images/image-web-design-large.jpg")] bg-no-repeat bg-cover rounded-xl flex'>
              <div className='w-fit h-fit m-auto text-white text-center'>
                <h1 className='text-5xl tracking-[2px]'>WEB DESIGN</h1>
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

export default app_design