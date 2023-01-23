import { useState, useEffect } from 'react';
import Map from '../components/Map';
import config from "../data/config.json";

function Shops() {
  const [coordinaates, setCoordinates] = useState({lngLat: [59.4378, 24.7574], zoom: 11});
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetch(config.shopsDbUrl)
    .then(res => res.json())
    .then(json => {
      setShops(json || []);
    });
  
  }, []);

  return (<div>
    <button onClick={() => setCoordinates({lngLat: [58.9478, 25.6095], zoom: 7})}>Kõik poed</button>
    <button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>Kõik Tallinna poed</button>

    {shops.map(element => 
    <button key={element.name} onClick={() => setCoordinates({lngLat: [element.xcoord, element.ycoord], zoom: 13})}>{element.name}</button>)}
      

    {/* <button onClick={() => setCoordinates({lngLat: [59.4231, 24.7991], zoom: 13})}>Ülemiste</button>
    <button onClick={() => setCoordinates({lngLat: [59.4277, 24.7193], zoom: 13})}>Kristiine</button>
    <button onClick={() => setCoordinates({lngLat: [58.3779, 26.7308], zoom: 13})}>Tasku</button>
    <button onClick={() => setCoordinates({lngLat: [58.3704, 24.5504], zoom: 13})}>Kaubamajakas</button> */}
    <Map mapCoordinaates={coordinaates}  />
  </div>)
}

export default Shops;