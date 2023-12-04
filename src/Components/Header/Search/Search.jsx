import React, { useEffect, useState } from 'react'
import './Search.scss'
import {MdClose} from 'react-icons/md';
import Earbuds from '../../../Assets/products/earbuds-prod-1.webp'
import { useContextProvider } from '../../../utis/context';
import useFetch from '../../../hooks/useFetch';

export default function Search() {
    const[query,changeQuery]=useState('');
    const {SetSearchOn}=useContextProvider();
    const handleChange=(event)=>{
        changeQuery(event.target.value)
    }
    console.log('re-render')
    let {data}=useFetch(`/api/products?populate=*&filters[product_name][$contains]=${query}`)
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
        {data?.data?.map((product)=>
            <div className="search-result-item">
                <div className='img-container'>
                    <img src={process.env.REACT_APP_DEV_URL+product.attributes.img.data.attributes.url}/>
                    </div>
                    <div className="text">
                        <div className="name">{product.attributes.product_name}</div>
                        <div className="des">{product.attributes.description}</div>
                    
                </div>
            </div>
  )}
            
        
    







        </div>
      </div>
    </div>
  )
}
