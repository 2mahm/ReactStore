import React, { useContext, useState } from "react";
import { CartContext } from "../store/CartContext";
import PageTitle from "../components/Layout/PageTitle";
import Swal from "sweetalert2";

export default function Card() {
  const cart = useContext(CartContext);
  const [Total,settotal]=useState(0)
  let tota=0
  // console.log(cart);
  // console.log(cart.CartItems);

  const deleteItem = (id) => {
    let newItem = cart.CartItems.filter((items) => items.id != id);
    cart.SetCartItems([...newItem]);

    Swal.fire({
      icon: "success",
      title: "Deleted Successfully",
    });
  };
  let a = 0;
  cart.CartItems.map((items) => {
    tota+=items.price*items.qty

    a += items.qty;
    return a,tota;
  });

  cart.Setcount(a);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <PageTitle title={"Cart Page"} />

            {cart.CartItems.length ? (
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                 
                  {cart.CartItems.map((item) => {
                    
                    return (
                      
                          <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.price} $</td>
                        <td>{item.qty}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => deleteItem(item.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                    
                  })}

                  <tr>
                    <td>
                                        
                  Total
                    </td>
                    <td colSpan={3}>
                    
                    {tota} $
                      </td>
                    </tr>
                </tbody>
              </table>
            ) : (
              <h2 className="text-center p-3 my-3 text-danger">
                Cart is Empty{" "}
              </h2>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
