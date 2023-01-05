import { useState } from "react";
import "../css/Cart.css";
import Button from '@mui/material/Button';

function Cart() {
  const [cart, renewCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  const deleteProduct = (i) => {
    cart.splice(i,1);
    renewCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));

 }

  // const addProduct = (item) => {
  //   cart.push(item);
  //   renewCart(cart.slice());
  // }

  const emptyCart = () => {
    renewCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  }

  const decreaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity - 1;
    if (cart[index].quantity === 0) {
      deleteProduct(index);
    }
    renewCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const increaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity + 1;
    renewCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const calculateTotalAmount = () => {
    let totalAmount = 0;
    cart.forEach(element => totalAmount = totalAmount + element.product.price * element.quantity);
    return totalAmount.toFixed(2);
  }

  

  return (
    <div>
      <div className="cart-top">
      {/* {cart.length > 0 && <button onClick={emptyCart}>Empty cart</button>} */}
      {cart.length > 0 && <div>{cart.length} tk</div>}
      <Button variant="contained" color="error">Empty cart</Button>
      </div>
      {cart.length === 0 && <div>Cart is empty</div>}
      {cart.map( (element, index) =>
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
          <img className="button" src="/remove.png" onClick={() => deleteProduct(index)} alt="" />
        
        {/* <button onClick={() => addProduct(element)}>+</button> */}

        </div>

        )}
        <div className="cart-bottom">
        <div>Total amount is: {calculateTotalAmount()} eur</div>
    </div>
    </div>

  
  )
}

export default Cart