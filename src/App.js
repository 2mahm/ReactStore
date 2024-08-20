import Navbar from "./components/Layout/Navbar";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Products from "./pages/Products";
import Card from "./pages/Card";
import Productdtal from "./pages/Productdtal";
import { useContext, useState } from "react";
import { CartContext } from "./store/CartContext";
import Swal from "sweetalert2";
function App() {
  const [CartItems,SetCartItems]=useState([]);
  const [count,Setcount]=useState(0);
  const AddToCard=(product)=>{



    let CheckItems=CartItems.find((item)=>item.id==product.id)
    if(CheckItems){
    let newItem=CartItems.map((items)=>{
      if(items.id==product.id){
        items.qty+=1
        Swal.fire({
          icon:"success",
          title:`Added To Card =>${items.qty}`,
        });
        Setcount(count +1 )
    
      }
      return items;
    })
    SetCartItems([...newItem])
    }else{
    let oldItems=CartItems;
    SetCartItems([...oldItems,{...product,qty:1}])
    Setcount(count +1 )
    Swal.fire({
      icon:"success",
      title:"Added To Card",
    });
    }
    
    
      }
  return (
    <>
  
    <BrowserRouter>
        <CartContext.Provider value={{CartItems,SetCartItems,count,Setcount,AddToCard}}>
        <Navbar/>
         <Routes>
      <Route path="/" element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="products/:productId" element={<Productdtal />} />
      <Route path="card" element={<Card />} />

    </Routes> 
        </CartContext.Provider>
  


    </BrowserRouter>

    </>
  );
}

export default App;
