import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useContext } from "react";
import CartSumContext from "../../store/CartSumContext";

function Product(props) {
  const { t } = useTranslation();
  const cartSumCtx = useContext(CartSumContext);

  const addToCart = (productClicked) => {
    let cartLS = localStorage.getItem("cart");
    cartLS = JSON.parse(cartLS) || [];
    const index = cartLS.findIndex(element => element.product.id === productClicked.id);
    if (index >=0) {

      cartLS[index].quantity = cartLS[index].quantity + 1; 
    } else {
    cartLS.push({"product": productClicked, "quantity": 1});
  }

    let cartsum = 0;
    cartLS.forEach(element => cartsum = cartsum + element.product.price * element.quantity);
    cartSumCtx.setCartSum(cartsum.toFixed(2));

    cartLS = JSON.stringify(cartLS);
    localStorage.setItem("cart", cartLS);
    toast.success(t("Added to cart!"), {"position": "bottom-right", "theme": "dark"});
  }


  return (
    <div>
    <Link to={"/product/" + props.element.id}>
    <img src={props.element.image} alt="" />
    <div>{props.element.id}</div>
    <div>{props.element.name}</div>
    <div>{props.element.price}</div>
    </Link>
    <div>{props.element.image}</div>
    <div>{props.element.catecory}</div>
    <div>{props.element.description}</div>
    <div>{props.element.active}</div>
    <button onClick={() => addToCart(props.element)}>Add to cart</button>
    </div>
  )
}

export default Product;