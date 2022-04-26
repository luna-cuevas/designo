import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com';
import Locations from '../components/Locations';

const contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (name && email && message) {
      const serviceId = 'service_c6lpgqy';
      const templateId = 'template_463e375';
      const userId = 'user_JcD1331LVSdIeKGHTgDqA';
      const templateParams = {
          name,
          email,
          message
      };

      emailjs.send(serviceId, templateId, templateParams, userId)
          .then(response => console.log(response))
          .then(error => console.log(error));

      setName('');
      setEmail('');
      setMessage('');
      setEmailSent(true);
    } else {
        alert('Please fill in all fields.');
    }
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
          {!emailSent && (
            <>
              <input className='mb-8 border-0 border-b-2 border-b-white bg-transparent placeholder-white ' placeholder='Name' type="text" value={name} onChange={e => setName(e.target.value)} />
              <input className='mb-8 border-0 border-b-2 border-b-white bg-transparent placeholder-white ' placeholder='Email' type="email" value={email} onChange={e => setEmail(e.target.value)} />
              <textarea className='mb-8 border-0 border-b-2 border-b-white bg-transparent placeholder-white ' placeholder='Message' value={message} onChange={e => setMessage(e.target.value)} />
              <button className='border-white hover:bg-[#FFAD9B] hover:text-white border-0 w-2/5 bg-white p-5 m-auto rounded-xl text-[#333136]'>
                <input type="submit" value="Submit" />
              </button>
            </>
          )}
          <span className={emailSent ? 'block' : 'hidden'}>Thank you for your message, we will be in touch in no time!</span>
        </form>
      </div>
      <Locations />
    </div>
  )
}

export default contact