import { useParams } from "react-router-dom";

function SingleProduct() {
  const {index} = useParams();
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const clickedProduct = products[index];



  return (
    <div>
      <img src={clickedProduct.image} alt="" />
      <div>{clickedProduct.id}</div>
      <div>{clickedProduct.name}</div>
      <div>{clickedProduct.price}</div>
      <div>{clickedProduct.catecory}</div>
      <div>{clickedProduct.description}</div>
      <div>{clickedProduct.active}</div>
    </div>
  )
}

export default SingleProduct;