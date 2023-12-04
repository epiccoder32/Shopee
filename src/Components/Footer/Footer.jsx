import React from 'react'
import './Footer.scss'
import Paymnetsimg from '../../Assets/payments.png'
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from 'react-icons/fa'
export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='text-content'>
          <div className='section'>
            <div className='section-heading'><h1>About</h1></div>
            <div className='about-details'>
                Voluptatem accusantium doloremque landntium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis el quasi architecto
                beatae vitae dicta sunt explicabo eaque ipsa quae ab illo</div>
          </div>
          <div className='section'>
            <div className='section-heading'><h1>Contact</h1></div>
            
               
                  <div className='c-item'><FaLocationArrow/> <p>Kayaloram Rd, Punnamada, Kottankulagara, Alappuzha, Kerala
                  ,688066</p></div>
                  <div className='c-item'><FaMobileAlt/><p>0471 2272 0261</p></div>
                  <div className='c-item'><FaEnvelope/><p>Email:store@arfaat.com</p></div>
                  
               
            
            
          </div>
          <div className='section'>
            <div className='section-heading'><h1>Categories</h1></div>
            <ul  className='category-lists'>
              
                  <li>Headphones</li>
                  <li>Smart Watches</li>
                  <li>Bluetooth Speakers</li>
                  <li>Wireless Earbuds</li>
                  <li>Home Theatre</li>
                  <li>Projectors</li>
               </ul>
            
          </div>
          <div className='section'>
            <div className='section-heading'><h1>Pages</h1></div>
            <div className='category-lists'>
               <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Privacy Policy</li>
                  <li>Returns</li>
                  <li>Terms & Conditions</li>
                  <li>Contacts</li>
               </ul>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
        <div className='bottom-content'>
          <div className='licenses'>SHOPEE 2023 CREATED BY SYED ARFAAT</div>
          <div className='bank-icons'>
            <img src={Paymnetsimg}/>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
