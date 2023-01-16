import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../css/Cart.css";
import Button from '@mui/material/Button';

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [parcelMachines, setParcelMachines] = useState([]);
  const [dbParcelMachines, setDbParcelMachines] = useState([]);

  useEffect(() => { //useffect kui tulen lehele ja kohe toimub API p2ring
    fetch("https://www.omniva.ee/locations.json")
    .then(response => response.json()) // response voib lyhemalt ka res kirjutada
    .then(json => {
      setParcelMachines(json);
      setDbParcelMachines(json);
      })
  }, []);

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

  const searchedRef = useRef();

  const searchFromParcelMachines = () => {
    const result = dbParcelMachines.filter(element =>
      element.NAME.toLowerCase().includes(searchedRef.current.value.toLowerCase())
    );
      setParcelMachines(result);
  }

  const pay = () => {
    const paymentUrl = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
    const paymentData = {
      "api_username": "92ddcfab96e34a5f",
      "account_name": "EUR3D1",
      "amount": calculateCartsum(),
      "order_reference": Math.random() * 99999,
      "nonce": "a9b7f7e79436defdf7c2c8sdd5d73154a01b9902" + new Date() + Math.random() * 99999,
      "timestamp": new Date(),
      "customer_url": "https://webshopproov.web.app"
    };
    const paymentHeaders = {
      "Authorization": "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA==",
      "Content-Type": "application/json"
    };

    fetch(paymentUrl, {"method": "POST", "body": JSON.stringify(paymentData), "headers": paymentHeaders})
    .then(res => res.json())
    .then(json => window.location.href = json.payment_link);
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
        </div>)}
        {cart.length > 0 &&
        <div className="cart-bottom">
        <div>Total amount is: {calculateCartsum()} eur</div>
        <input ref={searchedRef} onChange={searchFromParcelMachines} placeholder="Otsi siit" type="text" />
        <br />
        <select>
         {parcelMachines
         .filter(element => element.NAME !== "1.eelistus minu.omniva.ee-s")
         .filter(element => element.A0_NAME === "EE")
         .map(element => <option key={element.NAME}>{element.NAME}</option>)}
         {parcelMachines.length === 0 && <option disabled selected>Ei leitud</option>}
        </select>

        <button onClick={pay}>Maksa</button>
    </div>}
    </div>

  
  )
}

export default Cart