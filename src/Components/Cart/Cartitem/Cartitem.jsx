import React from 'react'
import image from '../../../Assets/products/earbuds-prod-1.webp'
import './Cartitem.scss'
import {MdClose} from 'react-icons/md';
import { useContextProvider } from '../../../utis/context';

export default function Cartitem({picture,name,price,count,product}) {
  const {handleRemoveFromCart,addToCart,handleProductQuanity}=useContextProvider();
  
  return (
    <div className='cart-item'>
        <div className='img'>
            <img src={picture}/>
        </div>
        <div className="right">
            <div className='top'>
            <span className="name">{name}</span>
            <MdClose size={16} className="closebtn" onClick={()=>handleRemoveFromCart({item:product,count:count})}/>
            </div>
            <div className='selection'>
                <span className='minus' onClick={()=>handleProductQuanity({item:product,type:'dec'})}>-</span>
                <span className="center">{count}</span>
                <span className="plus" onClick={()=>handleProductQuanity({item:product,type:'inc'})}>+</span>
            </div>
            <div className='number'>{count} x <span className="price">&#8377;{price}</span></div>
        </div>
        
    </div>
  )
}
