import React from 'react'
import ProductList from './Banner/ProductList'


export const Banner = () => {
  return (
    <div style={{ display:'flex', flexDirection:'flex',
     width:'100%',overflowX:'scroll', 
     whiteSpace:'nowrap',
    backgroundColor:'white', height:'50%' }}>
        <ProductList/><ProductList/><ProductList/><ProductList/>
    </div>
  )
}
