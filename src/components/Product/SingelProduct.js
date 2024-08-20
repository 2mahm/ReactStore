import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../store/CartContext';
import Swal from 'sweetalert2';

export default function SingelProduct({product}) {
  const card=useContext(CartContext);
  const AddToCard=(product)=>{



let CheckItems=card.CartItems.find((item)=>item.id==product.id)
if(CheckItems){
let newItem=card.CartItems.map((items)=>{
  if(items.id==product.id){
    items.qty+=1
    Swal.fire({
      icon:"success",
      title:`Added To Card =>${items.qty}`,
    });
    card.Setcount(card.count +1 )

  }
  return items;
})
card.SetCartItems([...newItem])
}else{
let oldItems=card.CartItems;
card.SetCartItems([...oldItems,{...product,qty:1}])
card.Setcount(card.count +1 )
Swal.fire({
  icon:"success",
  title:"Added To Card",
});
}


  }
  return (
    <>
   <div className='col-4 my-3'>
  <div className="card shadow-lg p-3 mb-5 bg-white rounded">
   
  <img className="card-img-top" src={product.image} style={{width:"100%",height:"350px"}} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{product.title.slice(0,20)+"..."}</h5>
    <p className="card-text">{product.description.slice(0,70)+"..."}</p>
    <p>
      <span className='badge bg-warning'> {product.price} $</span>
    </p>
    <Link to={`/products/${product.id}`} className="btn btn-primary mx-3">Show Detalies</Link>
    <a onClick={()=>AddToCard(product)} className="btn btn-info">Add to Card</a>

  </div>
</div>

</div>
    </>
  )
}
