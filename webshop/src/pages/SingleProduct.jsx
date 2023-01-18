import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import config from "../data/config.json";

function SingleProduct() {
  const { productId } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {

    fetch(config.productsDbUrl)

      .then(res => res.json())

      .then(json => setProduct(json.find(product => product.id === Number(productId))));

  }, [productId]);


  return (
    <div>
      {product ? (

        <>

          <div className="single-product-name">{product.name}</div>

          <div className="single-product-description">{product.description}</div>

          <div className="single-product-price">{product.price}</div>

          <img className="single-product-image" src={product.image} alt="" />

        </>

      ) : (

        <div>Product not found</div>

      )}
    </div>
  )
}

export default SingleProduct;

// <Link to={"/toode/" + index}>
// <img src={element.pilt} alt="" />