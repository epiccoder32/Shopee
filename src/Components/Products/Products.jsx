import React from 'react'
import Product from './Product/Product'
import './Products.scss'
import { useContextProvider } from '../../utis/context'

export default function Products() {
  const {products}=useContextProvider();
  console.log(products);
  
  return (
    <div className='products-container'>
        <div className='sec-heading'>Products</div>
        <div className='products'>
       
        {products?.data?.map((item)=>(
          <Product 
            id={item.id}
            picutre={
                item.img
            } 
            product_name={item.name} 
            price={item.price}
             />)
        )}
         

        </div>
    </div>
  )
}
