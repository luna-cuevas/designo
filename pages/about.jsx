import React from 'react'
import Locations from '../components/Locations'

const about = () => {
  return (
    <div className='text-white md:my-20'>
      <img className='w-full md:hidden md:w-fit' src="/images/image-about-hero.jpg" alt="" />
      <div className='w-full flex bg-[#E7816B] m-auto  md:w-3/4 md:rounded-xl'>
        <img className='w-full hidden md:block md:w-fit rounded-xl' src="/images/image-about-hero.jpg" alt="" />
        <div className='relative w-11/12 p-10 md:p-2 m-auto'>
          <img className='absolute w-48 right-0 -top-10' src="/images/bg-pattern-hero-about-desktop.svg" alt="" />
          <h1 className='mb-5 text-4xl md:w-3/4 md:m-auto md:mb-5'>About Us</h1>
          <p className='md:w-3/4 md:m-auto'>Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
        </div>
      </div>
      <div className='m-auto md:w-3/4 md:rounded-xl md:my-20'>
        <div className='overflow-hidden md:flex bg-[#FDF3F0] text-center'>
          <img className='w-full hidden md:block md:w-fit rounded-xl' src="/images/image-world-class-talent.jpg" alt="" />
          <img className='w-full md:hidden md:w-fit' src="/images/image-world-class-talent.jpg" alt="" />
          <div className=' m-auto relative p-10 md:p-0'>
            <img className='absolute top-0 right-0' src="/images/bg-pattern-three-circles.svg" alt="" />
            <h1 className='text-[#E7816B] m-auto text-[32px] my-5  md:w-3/4'>World-class Talent</h1>
            <p className='text-[#333136] m-auto md:w-3/4'>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.   
              <br />
              <br />
              Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftmdanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.</p>
          </div>
        </div>
      </div>
      <Locations />
      <div className='m-auto md:w-3/4 md:rounded-xl md:my-20'>
        <div className=' md:flex bg-[#FDF3F0] text-center'>
          <img className='w-full hidden md:block md:w-fit rounded-xl' src="/images/image-real-deal.jpg" alt="" />
          <img className='w-full md:hidden md:w-fit' src="/images/image-real-deal.jpg" alt="" />
          <div className='relative overflow-hidden m-auto p-10 md:p-0'>
            <img className='absolute top-0 right-0' src="/images/bg-pattern-three-circles.svg" alt="" />
            <h1 className='text-[#E7816B] m-auto text-[32px] my-5  md:w-3/4'>The real deal</h1>
            <p className='text-[#333136] m-auto md:w-3/4'>
              As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.
              Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.
              <br />
              <br />
              We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about