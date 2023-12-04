import React from 'react'
import Product from '../Product/Product';
import './RelatedProduct.scss';
import useFetch from '../../../hooks/useFetch';

export default function RelatedProduct({CategoryId,ItemId,products}) {
  console.log(products)
  const data=products.data.filter(product=>{
     return product.categoryid===CategoryId&&product.id!==ItemId
  });
  console.log(data)
  
  return (
    <div className='related-products'>
    <div className='related-products-heading'>Related Products</div>
    <div className='products-strip'>
    
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
  )
}
