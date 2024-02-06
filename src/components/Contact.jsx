import React, {useState} from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import validator from 'validator'


const Contact = () => {
  
  const form = useRef();

  const [emailError, setEmailError] = useState('')

  // EMAIL VALIDATING
  const handleChange = (e) => {
    if (validator.isEmail(e.target.value)) {
      console.log("good email")
      setEmailError("")
    } else {
      console.log("bad email")
      setEmailError("Please enter a valid Email")
    }

    console.log("clicked")
    console.log(e.target.value)

  };

  // SEND MESSAGE BY SENDER TO INBOX
  const sendEmail = (e) => {
    e.preventDefault();
    
    
    
     e.target.reset()
    };

  return (
    
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-8'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#3f3132]'>Contact
        </h1>
 {/* END OF CONTACT OPTIONS */}
 <form ref={form} onSubmit={sendEmail} method='POST' encType='multipart/fort-data'>
  <div>
    <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
      <div className='flex flex-col'>
        <label className='uppercase text-sm py-2'>Name</label>
        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name' placeholder='Full Name' required />
      </div>
      <div className='flex flex-col '>
        <label className='uppercase text-sm py-2'>Phone</label>
        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='phone' placeholder='Phone Number' required />
      </div>
    </div>
      <div className='flex flex-col py-2'>
        <label className='uppercase text-sm py-2'>Email</label>
        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='email' placeholder='email@abc.com' onChange={handleChange} required />
        <p>{emailError}</p>
      </div>
      <div className='flex flex-col py-2'>
        <label className='uppercase text-sm py-2'>Subjectl</label>
        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject' placeholder='Your Text Here' required />
      </div>
      <div className='flex flex-col py-2'>
        <label className='uppercase text-sm py-2'>Message</label>
        <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='7' name='message' placeholder='Your Message' required />
      </div>
        <div>
        <button className='bg-[#3f3132] text-gray-100 mt-4 w-full p-4 rounded-lg'>
              Send Message
        </button>
          </div>
        </div>
    </form>
  </div>
  )
}

export default Contact