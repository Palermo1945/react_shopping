import React from 'react'
import { PRODUCTS } from '../../products' 
import { Product } from './product'
import "./shop.css"

export const Shop = () => {
  return (
    <div className='shop'>

        <div className='shopTitle'>
            <h1>Shop <span className='see'>See</span></h1>
            <h1 className='see3'>Pet <span className='see2'>Shop</span></h1>
        </div>
        <div className='products'> {PRODUCTS.map((product) => (
        <Product data={product} />))} </div>

    </div>
  )
}
