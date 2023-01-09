import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productsFromFile from "../../data/products.json";

function EditProduct() {
  const { productId } = useParams();
  const [idUnique, setIdUnique] = useState(true);

  const productFound = productsFromFile.find(element => element.id === Number(productId));
  const index = productsFromFile.indexOf(productFound);

  const idRef = useRef ();
  const nameRef = useRef ();
  const priceRef = useRef ();
  const imageRef = useRef ();
  const categoryRef = useRef ();
  const descriptionRef = useRef ();
  const activeRef = useRef ();
  const navigate = useNavigate ();

  const changeProduct = () => {
    const updatedProduct = {
      "id": Number(idRef.current.value),
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "image": imageRef.current.value,
      "category": categoryRef.current.value,
      "description": descriptionRef.current.value,
      "active": activeRef.current.checked,
    }
    // .push(newProduct)
    productsFromFile[index] = updatedProduct;
    navigate("/admin/maintain-products");
  }


  const checkIdUniqueness = () => {
    const found = productsFromFile.find(element => element.id === Number(idRef.current.value));
    if (found === undefined) {
      setIdUnique(true);
    } else {
      setIdUnique(false);
    }
  }

  
  return (
    <div>
      { productFound !== undefined && 
      <div>
        {idUnique === false && <div>Id ei ole unikaalne!</div>}
        <label>ID</label> <br />
        <input ref={idRef} onChange={checkIdUniqueness} defaultValue={productFound.id} type="number" /> <br />
        <label>Name</label> <br />
        <input ref={nameRef} defaultValue={productFound.name} type="text" /> <br />
        <label>Price</label> <br />
        <input ref={priceRef} defaultValue={productFound.price} type="number" /> <br />
        <label>Image</label> <br />
        <input ref={imageRef} defaultValue={productFound.image} type="text" /> <br />
        <label>Category</label> <br />
        <input ref={categoryRef} defaultValue={productFound.category} type="text" /> <br />
        <label>Description</label> <br />
        <input ref={descriptionRef} defaultValue={productFound.description} type="text" /> <br />
        <label>Active</label> <br />
        <input ref={activeRef} defaultChecked={productFound.active} type="checkbox" /> <br />
        <button disabled={idUnique === false} onClick={changeProduct}>Muuda</button>
        </div>}
      { productFound === undefined && <div>Toodet ei leitud</div>}

    </div>
  )
}

export default EditProduct;

// single product kodus
// 1. urlis muutuja /:id alusel
// 2. kust siia lehele satun, pean tegema <link to... ning saatma urli sisse muutuja
// element.id (unikaalsuse tunnus) (link osas import) openAI irv
// 3. useparams abil votan selle muutuja siia faili (useparams osas import)
// 4.votan koik tooted (ehk teen productsfromfile osas impordi)
// 5. otsin yles oige toote  tooted.find abil
// 6. urlis asuvad muutujad on alati sonad ehk urlid on sona aga element.id on nr, peab teisendama sona nriks
// 7. kuvan valja htmlis leitud.toode.id ja leitudtoode.name jne
// 8. kontroll, et kui ei leitud yles siis naita "toodet ei leitud" mitte errorisse

// addproduct ka koju 7x refi - idref, nameref, priceref...
// 7x label ja input ja koik refid sisestame inputi sisse
// teeme nupu ja seome funktsiooni
// seome koik refid kokku yheks objektiks, stiilis: {id:idref.current.value, name:nameref...}
// push yhtseks objektiks tehtud toode

//editproductis:
//koikide inputide sisse defaultvalue
// otsime yles oige jarjekorranr sest ainult jknrga saab muuta ja kustutada
// asendame toote jknr abil: tooted[index] = uusToode