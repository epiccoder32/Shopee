import React from 'react'
import './Newsletter.scss'
import{
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
}from "react-icons/fa"
export default function Newsletter() {
  return (
    <div className='news-letter'>
      <div className='content-container'>
       <p className='small-text'>NEWSLETTER</p>
       <p className='big-text'>SIGN UP FOR LATEST UPDATES AND OFFERS</p>
        <h1></h1>
          
              <form className='inputs'>
                 <input 
                 className='email'
                 type='text'
                 placeholder='Email Address'
                 >
                 </input>
                 <button className='submit' >Subscribe</button>
              </form>
          
          <p className='muted-text'>Will be used in accordance with our Privacy Policy</p>
          <div className='icons'>
              <FaFacebookF size={20}/>
              <FaInstagram size={20}/>
              <FaTwitter size={20}/>
              <FaLinkedinIn size={20}/>
          </div>
      </div>

        
    </div>
  )
}
