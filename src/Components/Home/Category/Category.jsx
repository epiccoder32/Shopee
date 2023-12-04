import React from 'react'
import './Category.scss'
import {useNavigate} from "react-router-dom"

import { useContextProvider } from '../../../utis/context'

export default function Category() {

  const naviate=useNavigate();
  const {categories,getCategories}=useContextProvider();
  console.log(categories)
  return (
    <div className='categories-strip'>
      {categories?.data?.map((item)=>
        (
          <div className='category' key={item.id} onClick={()=>naviate(`/category/${item.id}`)}>
          <img src={
          item.img
          } alt=''/>
          </div>
        ))}
      
    </div>
  )
}
