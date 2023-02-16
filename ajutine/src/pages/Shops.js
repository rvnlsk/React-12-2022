import { useState } from 'react';
import Map from '../components/Map';

function Shops() {
  const [coordinaates, setCoordinates] = useState({lngLat: [59.4378, 24.7574], zoom: 11});

  return (
  <div>
    <button className="telliskivi-btn" onClick={() => setCoordinates({lngLat: [59.4395, 24.7284], zoom: 16})}>Telliskivi</button>
    <Map mapCoordinaates={coordinaates}  />
  </div>)
}

export default Shops;
