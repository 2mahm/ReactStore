import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CartContext } from '../store/CartContext';

export default function Productdtal() {
  
  const param=useParams();
  const [product, setProduct] = useState(false);
  const card=useContext(CartContext)
  // console.log(param.productId);
  
  useEffect(()=>{
axios.get(`https://fakestoreapi.com/products/${param.productId}`)
.then((data)=>{
setProduct(data.data)
})
  },[])
  return (
    <>
   
    <div className="container">
      <div className="row">
        {product ? <div className='col-6 my-3 mx-auto'>
  <div className="card shadow-lg">
   
  <img className="card-img-top" src={product.image} style={{width:"100%",height:"350px"}} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.description}</p>
    <p>
      <span className='badge bg-warning'> {product.price} $</span>
    </p>
    {/* <Link to={`/products/${product.id}`} className="btn btn-primary mx-3">Show Detalies</Link> */}
    <a onClick={()=>card.AddToCard(product)} className="btn btn-info">Add to Card</a>

  </div>
</div>

</div>:"not found"}
      </div>
    </div>

    </>
  )
}
