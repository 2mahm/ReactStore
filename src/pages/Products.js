import React, { useContext } from 'react'
import ProductList from '../components/Product/ProductList'
import { CartContext } from '../store/CartContext';
import PageTitle from '../components/Layout/PageTitle';

export default function Products() {
  const card=useContext(CartContext);

  return (

    <div className='container'>
     
      <div className='row'>
        <PageTitle title={"Product Page"}/>
      <ProductList/>

      </div>
    </div>
  )
}
