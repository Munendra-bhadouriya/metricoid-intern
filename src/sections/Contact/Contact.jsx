import React from 'react'
import { useState, useEffect } from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import SubmitButton from '../../components/SubmitButton';

const Contact = ({theme, setTheme}) => {

  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid =
      formData.firstName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.message.trim() !== "" &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email); // Basic email validation

      setIsFormValid(isValid);
  }, [formData]);
  
  function changeHandler(event) {
    const { name, value } = event.target;

    setFormData(prevData => {
      return {
        ...prevData,
        [name] : value
      }
    })
  }

  function submitHandler(event) {
    event.preventDefault();
    if (isFormValid) {
      console.log("Form submitted:", formData);
    } else {
      console.log("Form is invalid.");
    }
  }



  return (
    <div className={`max-w-[80%] relative mx-auto w-full flex flex-col items-center mt-20 p-8 justify-center scale-90`} id='contact'>

      <div className='relative w-full text-center flex flex-col justify-center items-center gap-y-5'>
        <p className={`${theme === 'dark' ? 'text-green' : 'text-pink'} text-5xl font-extrabold tracking-wide`}>Let's Get in Touch.</p>
        <p className={`text-xl font-semibold tracking-wider mb-8 ${theme === 'dark' ? ' text-gray-300' : 'text-gray-500 '}`}>Any questions or remarks? Just write us a message!</p>
      </div>

      <div className= {`relative w-[90%] flex justify-between items-center gap-x-5 rounded-lg ${theme === 'dark' ? ' bg-slate-500' : 'bg-white'}`}>

        {/*my details */}
        <div className={`${theme === 'dark' ? 'bg-slate-300' : 'bg-[#011d2b]'} flex flex-col p-8 rounded-lg m-2 w-2/5 relative justify-between gap-y-40`}>
          
          <div className='w-full relative flex flex-col gap-y-1 tracking-wide'>
            <p className={`text-2xl ${theme === 'dark' ? 'text-[#011d2b]' : 'text-white'} font-semibold`}>Contact Information</p>
            <p className={` font-semibold ${theme === 'dark' ? ' text-slate-500' : 'text-slate-400'}`}>Say something to start a live chat!</p>
          </div>

          <div className='w-full relative flex flex-col gap-y-5 '>
            <div className='w-full relative flex items-center gap-x-6 '>
              <FaPhoneVolume className={`${theme === 'dark' ? 'text-[#011d2b]' : 'text-white'}` } />
              <a href="tel:+919343405443" className={`${theme === 'dark' ? 'text-slate-600' : 'text-gray-300'} hover:text-pink transition-all duration-300`} >+91 9343405443</a>
            </div>
            
            <div className='w-full relative flex items-center gap-x-6'>
              <IoMdMail className={`${theme === 'dark' ? 'text-[#011d2b]' : 'text-white'}` } />
              <a href="mailto:munendra.connect@gmail.com" className={`${theme === 'dark' ? 'text-slate-600' : 'text-gray-300'} hover:text-pink transition-all duration-300`}>munendra.connect@gmail.com</a>
            </div>

            <div className='w-full relative flex items-center gap-x-6'>
              <FaLocationDot className={`${theme === 'dark' ? 'text-[#011d2b]' : 'text-white'}` } />
              <a href="https://www.google.com/maps?q=123+Main+Street,+Springfield,+USA" rel="noopener noreferrer" target="_blank" className={`${theme === 'dark' ? 'text-slate-600 hover:text-pink' : 'text-gray-300 hover:text-pink'} transition-all duration-300`}>123 Main Street, Springfield, USA</a>
            </div>
          </div>

          <div className={`relative w-full flex text-3xl gap-x-5 ${theme === 'dark' ? 'text-[#011d2b]' : 'text-white'}`}>
            <a href='#' rel="noopener noreferrer" target='_blank'><FaLinkedin className='hover:scale-125 hover:text-pink transition-all duration-300'/></a>
            <a href='#' rel="noopener noreferrer" target='_blank'><FaSquareXTwitter className='hover:scale-125 hover:text-pink transition-all duration-300'/></a>
            <a href='#' rel="noopener noreferrer" target='_blank'><FaInstagram className='hover:scale-125 hover:text-pink transition-all duration-300'/></a>
          </div>
        </div>
        
        {/*form */}
        <div className='relative w-3/5 p-8 flex justify-center items-center'>
          <form onSubmit={submitHandler} className='w-full relative flex flex-col gap-y-12 justify-between items-center'>

            {/*name */}
            <div className='relative w-full flex justify-center gap-x-8'>
              <div className='relative w-full group'>
                <label className={`relative flex flex-col w-full text-gray-400 gap-y-3 font-semibold group-focus-within:text-black transition-all duration-200 ${theme === 'dark' ? 'text-gray-300 group-focus-within:text-white' : 'text-gray-400 group-focus-within:text-black'}`}>
                  <span>First Name <sup><span className=' text-red-300 group-focus-within:text-red-700 transition-all duration-200'>*</span></sup></span>
                  <input
                    type='text'
                    name='firstName'
                    value={formData.firstName}
                    placeholder=''
                    onChange={changeHandler}
                    required
                    className={`placeholder:font-light border-b-[2.5px] outline-none transition-all duration-200 ${theme === 'dark' ? 'bg-slate-500 border-slate-400 focus:border-white' : 'focus:border-gray-500'}`}
                  />
                </label>
              </div>

              <div className='relative w-full group'>
                <label className={`relative flex flex-col w-full text-gray-400 gap-y-3 font-semibold group-focus-within:text-black transition-all duration-200 ${theme === 'dark' ? 'text-gray-300 group-focus-within:text-white' : 'text-gray-400 group-focus-within:text-black'}`}>
                  Last Name
                  <input
                    type='text'
                    name='lastName'
                    value={formData.lastName}
                    placeholder=''
                    onChange={changeHandler}
                    className={`placeholder:font-light border-b-[2.5px] outline-none transition-all duration-200 ${theme === 'dark' ? 'bg-slate-500 border-slate-400 focus:border-white' : 'focus:border-gray-500'}`}
                  />
                </label>
              </div>
            </div>

            {/*contact details */}
            <div className='relative w-full flex justify-center gap-x-8'>
              <div className='relative w-full group'>
                <label className={`relative flex flex-col w-full text-gray-400 gap-y-3 font-semibold group-focus-within:text-black transition-all duration-200 ${theme === 'dark' ? 'text-gray-300 group-focus-within:text-white' : 'text-gray-400 group-focus-within:text-black'}`}>
                <span>Email <sup><span className=' text-red-300 group-focus-within:text-red-700 transition-all duration-200'>*</span></sup></span>
                <input
                    type='email'
                    name='email'
                    value={formData.email}
                    placeholder=''
                    onChange={changeHandler}
                    required
                    className={`placeholder:font-light border-b-[2.5px] outline-none transition-all duration-200 ${theme === 'dark' ? 'bg-slate-500 border-slate-400 focus:border-white' : 'focus:border-gray-500'}`}
                  />
                </label>
              </div>

              <div className='relative w-full group'>
                <label className={`relative flex flex-col w-full text-gray-400 gap-y-3 font-semibold group-focus-within:text-black transition-all duration-200 ${theme === 'dark' ? 'text-gray-300 group-focus-within:text-white' : 'text-gray-400 group-focus-within:text-black'}`}>
                  Phone Number
                  <input
                    type='tel'
                    name='phone'
                    value={formData.phone}
                    placeholder=''
                    onChange={changeHandler}
                    className={`placeholder:font-light border-b-[2.5px] outline-none transition-all duration-200 ${theme === 'dark' ? 'bg-slate-500 border-slate-400 focus:border-white' : 'focus:border-gray-500'}`}
                  />
                </label>
              </div>
            </div>

            {/*message */}
            <div className='relative w-full group'>
              <label className={`relative flex flex-col w-full text-gray-400 gap-y-3 font-semibold group-focus-within:text-black transition-all duration-200 ${theme === 'dark' ? 'text-gray-300 group-focus-within:text-white' : 'text-gray-400 group-focus-within:text-black'}`}>
              <span>Message <sup><span className=' text-red-300 group-focus-within:text-red-700 transition-all duration-200'>*</span></sup></span>
                <textarea
                  name='message'
                  value={formData.message}
                  placeholder='Write your message...'
                  onChange={changeHandler}
                  className={`placeholder:font-light border-b-[2.5px] outline-none transition-all duration-200 content-center ${theme === 'dark' ? 'bg-slate-500 border-slate-400 focus:border-white' : 'focus:border-gray-500'}`}
                  />
              </label>
            </div>

            {/*button */}
            <div className='relative w-full flex justify-end'>
              <SubmitButton isFormValid={isFormValid} theme={theme} setTheme={setTheme} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact