import { useState, useRef, useEffect } from "react";
import config from "../../data/config.json";
// import shopsFromFile from "../Shops.jsx"

function MaintainShops() {
  const [shops, setShops] = useState([]);
  const shopRef = useRef();
  const timeRef = useRef();
  const cityRef = useRef();
  const xcoordRef = useRef();
  const ycoordRef = useRef();

  useEffect(() => {
    fetch(config.shopsDbUrl)
    .then(res => res.json())
    .then(json => setShops(json || []));
  }, []);
 

  // const addShop = () => {
  //   shops.push({"name": shopRef.current.value, "time": timeRef.current.value});
  //   setShops(shops.slice());
  // }

  const addShop = () => {
    const newShop = {
      "name": shopRef.current.value,
      "time": timeRef.current.value,
      "city": cityRef.current.value,
      "xcoord": xcoordRef.current.value,
      "ycoord": ycoordRef.current.value,

    }
    shops.push(newShop);
    fetch(config.shopsDbUrl, {"method": "PUT", "body": JSON.stringify(shops)})
    .then(() => {
      setShops(shops.slice())
    shopRef.current.value = "";
    timeRef.current.value = "";
    cityRef.current.value = "";
    xcoordRef.current.value = "";
    ycoordRef.current.value = "";
    });

  }

  const deleteShop = (index) => {
    shops.splice(index, 1);
    fetch(config.shopsDbUrl, {"method": "PUT", "body": JSON.stringify(shops)})
    .then(() => setShops(shops.slice()));
  }
  
  //  lisada, vaadata, kustutada

  // xcoord, ycoord, name, opentime nendele ka refid
  // inpute 4x
  // addShop () { const newShop = {"xCoord": xCoordRef.current.value, "yCoord":..}}

  return (
    <div>
      <label>Shop name</label> <br />
      <input ref={shopRef} type="text" /> <br />
      <label>Open time</label> <br />
      <input ref={timeRef} type="text" /> <br />
      <label>City</label> <br />
      <input ref={cityRef} type="text" /> <br />
      <label>X-coordinate</label> <br />
      <input ref={xcoordRef} type="text" /> <br />
      <label>Y-coordinate</label> <br />
      <input ref={ycoordRef} type="text" /> <br />
      <button onClick={addShop}>Add shop</button> <br />
      {shops.map((element, index) => <div key={index}>{element.name} <button onClick={() => deleteShop(index)}>x</button> </div>)}

      {/* <button onClick={addShop}>Add</button> */}
    </div>
  )
}

export default MaintainShops;