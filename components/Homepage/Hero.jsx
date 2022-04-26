
const Hero = () => {
  return (
    <div className='flex w-full sm:w-4/5 h-[800px] sm:h-[650px] overflow-hidden m-auto justify-between sm:mt-20'>
      <div className='flex flex-col relative overflow-hidden sm:flex-row w-full bg-[#E7816B] rounded-lg'>
        <svg className='absolute z-0 right-0' width="640" height="639" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a"><stop stop-color="#5D0202" stop-opacity="0" offset="0%"/><stop stop-color="#5D0202" stop-opacity=".498" offset="100%"/></linearGradient></defs><circle fill="url(#a)" transform="matrix(0 -1 -1 0 640 640)" cx="320" cy="320" r="320" fill-rule="evenodd" opacity=".309"/></svg>
        <div className='w-11/12 z-30 sm:w-1/2 m-auto text-white mt-20 sm:p-16'>
          <h1 className='text-4xl text-center sm:text-left sm:font-medium'>
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className='w-11/12 text-center sm:text-left m-auto sm:mx-0 my-10'>
            With over 10 years in the industry, we are experienced in creating 
            fully responsive websites, app design, and engaging brand experiences. 
            Find out more about our services.
          </p>
          <button className="bg-white hover:bg-[#FFAD9B] hover:text-white flex m-auto sm:mx-0 text-black p-5 sm:p-3 rounded-xl tracking-[1px]"><a href="/about">Learn More</a></button>
        </div>
        <div className='w-full m-auto sm:w-1/2 text-white'>
          <img src='/images/image-hero-phone.png' />
        </div>
      </div>
    </div>
  )
}

export default Hero