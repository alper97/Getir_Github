import { useState, useEffect } from 'react';
import Products from '../api/products.json';
import ProductItem from './uı/Productitem';




export default function Favorites() {

  const [products, setProducts]= useState([]);

  useEffect(()=>{
    setProducts(Products);
  },[])

  return (
    <div className='container mx-auto'>
      <h3 className='text-sm font-semibold my-3'>Favoriler</h3>
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-0.1 rounded-lg overflow-hidden'>
        {products.length && products.map((product,index)=> <ProductItem key={product.id} product={product} />)}
      </div>
    </div>
  )
}
