import React from 'react';
import './Category.scss';
import { useParams } from 'react-router-dom';
import Product from '../Products/Product/Product';
import headphonepic from '../../Assets/products/headphone-prod-6.webp'
import speaker from '../../Assets/products/speaker-prod-1.webp'
import earbuds from '../../Assets/products/earbuds-prod-2.webp'
import useFetch from '../../hooks/useFetch';
import { useContextProvider } from '../../utis/context';

export default function Category() {
    window.scrollTo({top:0,behavior:'instant'});
    const {getProducts,getCategories}=useContextProvider()
    const products=getProducts()
    const categories=getCategories()
    console.log(categories)

      const {id}=useParams();
      const id1=Number(id)
    const data=products.data.filter(product=>{
      return product.categoryid===id1
   });
    
    
    
  return (
    <div className='category-page'>
        <div className='category-cotent'>
        <div className='category-name'> 
        {categories?.data[id1-1].name}
        </div>
        <div className='categories'>
        {data?.map((item)=>(
          <Product 
            picutre={
               
                item.img
            } 
            product_name={item.name} 
            price={item.price}
            id={item.id}
             />)
        )}
        
      </div>
      </div>
    </div>
  )
}
