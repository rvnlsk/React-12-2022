import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/Cart.module.css";
import Button from '@mui/material/Button';
import ParcelMachines from "../components/cart/ParcelMachines";
import Payment from "../components/cart/Payment";
import CartSumContext from "../store/CartSumContext";

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const cartSumCtx = useContext(CartSumContext);
  

   // tyhjendamine
  const empty = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
    cartSumCtx.setCartSum(0);
  }

  const decreaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity - 1;
    if (cart[index].quantity === 0) {
      remove(index);
    }
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    cartSumCtx.setCartSum(calculateCartsum());
  }

  const increaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity + 1;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    cartSumCtx.setCartSum(calculateCartsum());
  }

    // kustutamine
  const remove = (index) => {
    cart.splice(index,1);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    cartSumCtx.setCartSum(calculateCartsum());
  
   }

  const calculateCartsum = () => {
    let cartsum = 0;
    cart.forEach(element => cartsum = cartsum + element.product.price * element.quantity);
    return cartsum.toFixed(2);
  }

  

  // const pay = () => {
  //   const paymentUrl = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
  //   const paymentData = {
  //     "api_username": "92ddcfab96e34a5f",
  //     "account_name": "EUR3D1",
  //     "amount": calculateCartsum(),
  //     "order_reference": Math.random() * 99999,
  //     "nonce": "a9b7f7e79436defdf7c2c8sdd5d73154a01b9902" + new Date() + Math.random() * 99999,
  //     "timestamp": new Date(),
  //     "customer_url": "https://webshopproov.web.app"
  //   };
  //   const paymentHeaders = {
  //     "Authorization": "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA==",
  //     "Content-Type": "application/json"
  //   };

  //   fetch(paymentUrl, {"method": "POST", "body": JSON.stringify(paymentData), "headers": paymentHeaders})
  //   .then(res => res.json())
  //   .then(json => window.location.href = json.payment_link);
  // }
  

  return (
    <div>
      {cart.length === 0 && <div>Ostukorv on tyhi. <Link to ="/">Lisa tooteid</Link></div>}
      {cart.length > 0 && 
        <div className={styles["cart-top"]}>
          <Button variant="contained" color="error" onClick={empty}>Empty cart</Button>
          {/* <button onClick={empty}>Tyhjenda</button>} */}
        <div>{cart.length} tk</div>
    </div> }
    {cart.map((element, index) =>
        <div key={element.product.id} className={styles.product}>
          <img className={styles.image} src={element.product.image} alt="" />
          <div className={styles.name}>{element.product.name}</div>
          <div className={styles.price}>{element.product.price} eur</div>
        <div className={styles.quantity}>
          <img className={styles.button} src="/minus.png" onClick={() => decreaseQuantity(index)} alt="" />
          
          <div>{element.quantity} tk </div>
          <img className={styles.button} src="/add.png" onClick={() => increaseQuantity(index)} alt="" />
          </div>
          <div className={styles.sum}>{(element.product.price * element.quantity).toFixed(2)} eur</div>
          <img className={styles.button} src="/remove.png" onClick={() => remove(index)} alt="" />
        </div>)}
        {cart.length > 0 &&
        <div className={styles.cart__bottom}> 
        {/* // cssi parast kirjutan selle cart bottom yleval nii */}
        <div>Total amount is: {calculateCartsum()} eur</div> <br />
        
        <br />
        <ParcelMachines />
        <Payment sum={calculateCartsum()} />
        {/* <button onClick={pay}>Maksa</button> */}
    </div>}
    </div>

  
  )
}

// 150+ rida -- hakkame motlema valjatostmsie peale ja 200 rida tostame valja

export default Cart