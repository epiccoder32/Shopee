import React from 'react'
import { useNavigate } from 'react-router-dom' 
import './Product.scss'

export default function Product({picutre,product_name,price,id}) {
  const Nav=useNavigate();
  return (
    <div className='product'onClick={()=>Nav(`/product/${id}`)} >
      <div className='product-thumbnail'>
      <img src={picutre}/>
      </div>
      <div className='product-details'>
        <div className='name'>
        {product_name}
        </div>
        <div className='price'>₹{price}
         </div>
      </div>
    </div>
  )
}
