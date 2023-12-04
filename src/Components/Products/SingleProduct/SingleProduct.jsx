import React, { useEffect, useState } from 'react'
import './SingleProduct.scss'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPinterest, FaCartPlus } from 'react-icons/fa'
import RelatedProduct from './RelatedProduct'
import { useParams } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import { useContextProvider } from '../../../utis/context'
import { useLocation } from 'react-router-dom'

export default function SingleProduct() {
  const Location=useLocation();
  useEffect(()=>{
    window.scrollTo({top:0,behavior:'smooth'});
    EditCart(1);
  },[Location])

  
  const{addToCart,cartItems,handleRemoveFromCart}=useContextProvider();
  const {id}=useParams();
  const {getProducts}=useContextProvider()
  const products=getProducts()
  const data=products.data.filter(prod=>{return prod.id===id})
 
  const [cartSize,EditCart]=useState(1);
  

  const increment=()=>{
    EditCart(prev=>prev+1);
  }
  const decrement=()=>{
    EditCart(prev=>
      {
        if(prev==1)return 1;
        else return prev-1
      });
  }
  
  return (
    <div className='single-product-main-cotent'>
    <div className='single-product-layout'>
      <div className='single-product-page'>
        <div className='product-picture'>
        <img src={products.data[id-1]?.img}/>
        </div>
        <div className='product-details'>
              <div className='product-main-details'>
                <div className='name'>{products?.data[id-1]?.name}</div>
                <div className='price'>₹{products?.data[id-1]?.price}</div>
                <div className='description'>{products?.data[id-1]?.des}</div>
                <div className='inputs'>
                <div className='quantity-buttons'>
                <span onClick={()=>{decrement()}}>-</span>
                      <span >{cartSize}</span>
                      <span onClick={()=>{increment()}}>+</span>
                      
                </div>
                <button className="cart-button" onClick={()=>{addToCart({item:products.data[id-1],count:cartSize})}}><FaCartPlus/> Add to Cart </button>
                </div>
          
              </div>
              <div className='meta-data'>
              <div className='category-detials'>
              <div className='section-name'>Category:</div>
              <div className='category-name'>Smart Watches</div>
              </div>
              
            
                <div className='social-media'>
                    <div className='section-name'>Share:</div>
                    <div className='icons'>
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaTwitter/>
                    <FaLinkedin/>
                    <FaPinterest/>
                    </div>
                </div>
              </div>

        </div>
    </div>
    <RelatedProduct
    CategoryId={products.data[id-1]?.categoryid} 
    ItemId={products.data[id-1]?.id}
    products={products}
    />
  </div>
  </div>
  )
}
