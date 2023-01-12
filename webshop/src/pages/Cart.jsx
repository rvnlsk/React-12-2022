import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Cart.css";
import Button from '@mui/material/Button';

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

   // tyhjendamine
  const empty = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  }

  const decreaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity - 1;
    if (cart[index].quantity === 0) {
      remove(index);
    }
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const increaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity + 1;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

    // kustutamine
  const remove = (index) => {
    cart.splice(index,1);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  
   }

  const calculateCartsum = () => {
    let cartsum = 0;
    cart.forEach(element => cartsum = cartsum + element.product.price * element.quantity);
    return cartsum.toFixed(2);
  }

  

  return (
    <div>
      {cart.length === 0 && <div>Ostukorv on tyhi. <Link to ="/">Lisa tooteid</Link></div>}
      {cart.length > 0 && 
        <div className="cart-top">
          <Button variant="contained" color="error" onClick={empty}>Empty cart</Button>
          {/* <button onClick={empty}>Tyhjenda</button>} */}
        <div>{cart.length} tk</div>
    </div> }
    {cart.map((element, index) =>
        <div key={element.product.id} className="product">
          <img className="image" src={element.product.image} alt="" />
          <div className="name">{element.product.name}</div>
          <div className="price">{element.product.price} eur</div>
        <div className="quantity">
          <img className="button" src="/minus.png" onClick={() => decreaseQuantity(index)} alt="" />
          
          <div>{element.quantity} tk </div>
          <img className="button" src="/add.png" onClick={() => increaseQuantity(index)} alt="" />
          </div>
          <div className="sum">{(element.product.price * element.quantity).toFixed(2)} eur</div>
          <img className="button" src="/remove.png" onClick={() => remove(index)} alt="" />
        
      

        </div>

        )}
        <div className="cart-bottom">
        <div>Total amount is: {calculateCartsum()} eur</div>
    </div>
    </div>

  
  )
}

export default Cart