import React, { useRef } from 'react'
import emailjs from 'emailjs-com';
import Locations from '../components/Locations';

const contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c6lpgqy', 'template_vdw3ffh', form.current, 'user_JcD1331LVSdIeKGHTgDqA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <div className='relative overflow-hidden text-center md:flex md:w-3/4 md:m-auto my-10 md:rounded-xl md:my-10 bg-[#E7816B] text-white pt-10 pb-1'>
        <img className='absolute w-1/2' src="/images/bg-pattern-small-circle.svg" alt="" />
        <div className='md:w-1/2 md:m-auto md:text-left'>
          <h1 className='text-3xl md:w-3/4 m-auto mb-5'>Contact US</h1>
          <p className='w-3/4 m-auto'>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
        </div>
        <form ref={form} onSubmit={sendEmail} className='my-10 w-3/4 md:w-1/2 md:pr-10 flex flex-col m-auto'>
          <input className='mb-8 border-0 border-b-2 border-b-white bg-transparent placeholder-white ' placeholder='Name' type="text" name="user_name" />
          <input className='mb-8 border-0 border-b-2 border-b-white bg-transparent placeholder-white ' placeholder='Email' type="email" name="user_email" />
          <textarea className='mb-8 border-0 border-b-2 border-b-white bg-transparent placeholder-white ' placeholder='Message' name="message" />
          <button className='border-white hover:bg-[#FFAD9B] hover:text-white border-0 w-2/5 bg-white p-5 m-auto rounded-xl text-[#333136]'>
            <input type="submit" value="Submit" />
          </button>
        </form>
      </div>
      <Locations />
    </div>
  )
}

export default contact