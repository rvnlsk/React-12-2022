import { useRef, useState } from "react";

function AddProduct() {
  const [message, setMessage] = useState("Add new product!");
  const idRef = useRef ();
  const nameRef = useRef ();
  const priceRef = useRef ();
  const imageRef = useRef ();
  const categoryRef = useRef ();
  const descriptionRef = useRef ();
  const activeRef = useRef ();

  function addProduct() {
    if (idRef.current.value === "") {
      setMessage("You can't add product with empty name!")
    } else {
      setMessage("New product added" + idRef.current.value);

      let productsLS = localStorage.getItem("products");
      productsLS = JSON.parse(productsLS) || [];
      const newProduct = {
        "id": Number(idRef.current.value),
        "name": nameRef.current.value,
        "price": Number(priceRef.current.value),
        "image": imageRef.current.value,
        "category": categoryRef.current.value,
        "description": descriptionRef.current.value,
        "active": activeRef.current.checked,
    }
    productsLS.push(newProduct);
    productsLS = JSON.stringify(productsLS);
    localStorage.setItem("products", productsLS);
    }
  }




  return (
    <div>
    <div>{message}</div> 
    <label>ID</label> <br />
    <input ref={idRef} type="number" /> <br />
    <label>Name</label> <br />
    <input ref={nameRef} type="text" /> <br />
    <label>Price</label> <br />
    <input ref={priceRef} type="number" /> <br />
    <label>Image</label> <br />
    <input ref={imageRef} type="text" /> <br />
    <label>Category</label> <br />
    <input ref={categoryRef} type="text" /> <br />
    <label>Description</label> <br />
    <input ref={descriptionRef} type="text" /> <br />
    <label>Active</label> <br />
    <input ref={activeRef} type="checkbox" /> <br />
    <button onClick={addProduct}>Add</button>
    </div>
    
  )
}

export default AddProduct;