import React, { useEffect, useState } from 'react'
import './Search.scss'
import {MdClose} from 'react-icons/md';
import Earbuds from '../../../Assets/products/earbuds-prod-1.webp'
import { useContextProvider } from '../../../utis/context';
import useFetch from '../../../hooks/useFetch';

export default function Search() {
    const[query,changeQuery]=useState('');
    const {SetSearchOn,products}=useContextProvider();
    let data=[]
    console.log(products)
    const handleChange=(event)=>{
        changeQuery(event.target.value)
       
    }
    data=products.data.filter(prod=>{
      return prod.name.toLowerCase().includes(query)
    })
    console.log(data)
      if(!query.length)
    {
        data=null
    }
    
  return (
    <div className='search-modal'>
      <div className='form-field'>
            <input
            type='text'
            autoFocus
            placeholder='SEARCH FOR PRODUCTS'
            value={query}
            onChange={handleChange}
            ></input>
            <MdClose onClick={()=>SetSearchOn(false)}/>
      </div>
      <div className='search-result-content'>
        <div className="search-results">
        {data?.map((product)=>
            <div className="search-result-item">
                <div className='img-container'>
                    <img src={product.img}/>
                    </div>
                    <div className="text">
                        <div className="name">{product.name}</div>
                        <div className="des">{product.des}</div>
                    
                </div>
            </div>
  )}
            
        
    







        </div>
      </div>
    </div>
  )
}
