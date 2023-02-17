import { useState } from 'react';
import Map from '../components/Map';

function Shops() {
  const [coordinaates, setCoordinates] = useState({lngLat: [59.4378, 24.7574], zoom: 11});

  return (

    
    <div className="container-shops">
    <div className="container-button">
    <button className="telliskivi-btn" onClick={() => setCoordinates({lngLat: [59.4395, 24.7284], zoom: 16})}>..</button>
   
      
    <Map mapCoordinaates={coordinaates}  />
    </div>
    </div>
  )
}

export default Shops;
