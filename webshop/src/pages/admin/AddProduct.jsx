import { useRef, useState, useEffect } from "react";
import config from "../../data/config.json";
import { ToastContainer, toast } from "react-toastify";

function AddProduct() {
  const [dbProducts, setDbProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [idUnique, setIdUnique] = useState([]);
  const idRef = useRef ();
  const nameRef = useRef ();
  const priceRef = useRef ();
  const imageRef = useRef ();
  const categoryRef = useRef ();
  const descriptionRef = useRef ();
  const activeRef = useRef ();

  useEffect(() => {
    fetch(config.productsDbUrl)
    .then(res => res.json())
    .then(json => {
      setDbProducts(json);
    });

    fetch(config.categoriesDbUrl)
    .then(res => res.json())
    .then(json => setCategories(json || []));
  }, []);

  const addProduct = () => {
    if (idRef.current.value === "") {
      toast.error("ID lisamata!", {"position": "bottom-right", "theme": "dark"});
      return;
    }
    if (nameRef.current.value === "") {
      toast.error("Nimi lisamata!", {"position": "bottom-right", "theme": "dark"});
      return;
    }
    if (nameRef.current.value.charAt(0).toLowerCase() === nameRef.current.value.charAt(0)) {
      toast.error("Pead lisama suure algustahega!", {"position": "bottom-right", "theme": "dark"});
      return;
    }
    if (imageRef.current.value === "") {
      toast.error("Pilt lisamata!", {"position": "bottom-right", "theme": "dark"});
      return;
    }
    if (imageRef.current.value.replaceAll(" ", "") !== imageRef.current.value) {
      toast.error("Pildi URL-is ei saa olla tyhikuid!", {"position": "bottom-right", "theme": "dark"});
      return;
    }
    if (descriptionRef.current.value === "") {
      toast.error("Kirjeldus lisamata!", {"position": "bottom-right", "theme": "dark"});
      return;
    }
    if (priceRef.current.value === "") {
      toast.error("Hind lisamata!", {"position": "bottom-right", "theme": "dark"});
      return;
    }

    const newProduct = {
        id: Number(idRef.current.value),
        name: nameRef.current.value,
        price: Number(priceRef.current.value),
        image: imageRef.current.value,
        category: categoryRef.current.value,
        description: descriptionRef.current.value,
        active: activeRef.current.checked,
        date: new Date()
    }
    dbProducts.push(newProduct);
    fetch(config.productsDbUrl, {"method": "PUT", "body": JSON.stringify(dbProducts)})
    .then(() => {
        toast.success("Toode lisatud!", {"position": "bottom-right", "theme": "dark"});
        idRef.current.value = "";
        nameRef.current.value = "";
        priceRef.current.value = "";
        imageRef.current.value = "";
        categoryRef.current.value = "";
        descriptionRef.current.value = "";
        activeRef.current.checked = false;
    })
    }

    const checkIdUniqueness = () => {
        const found = dbProducts.find(element => element.id === Number(idRef.current.value));
        if (found === undefined) {
            setIdUnique(true);
        } else {
            setIdUnique(false);
        }
    }
  


  return (
    <div>
    <ToastContainer />
    {idUnique === false && <div>Id ei ole unikaalne!</div>}
    <label>ID</label> <br />
    <input ref={idRef} type="number" onChange={checkIdUniqueness} /> <br />
    <label>Name</label> <br />
    <input ref={nameRef} type="text" /> <br />
    <label>Price</label> <br />
    <input ref={priceRef} type="number" /> <br />
    <label>Image</label> <br />
    <input ref={imageRef} type="text" /> <br />
    <label>Category</label> <br />
    {/* <input ref={categoryRef} type="text" /> <br /> */}
    <select ref={categoryRef}>
      {categories.map(element => <option>{element.name}</option>)}
    </select> <br />
    <label>Description</label> <br />
    <input ref={descriptionRef} type="text" /> <br />
    <label>Active</label> <br />
    <input ref={activeRef} type="checkbox" /> <br />
    <button disabled={idUnique === false} onClick={addProduct}>Add</button>
    </div>
    
  )
}

export default AddProduct;