import { useEffect, useState, useRef } from "react";

function ParcelMachines() {
    const [parcelMachines, setParcelMachines] = useState([]);
    const [dbParcelMachines, setDbParcelMachines] = useState([]);
  
    useEffect(() => { //useffect kui tulen lehele ja kohe toimub API p2ring
      fetch("https://www.omniva.ee/locations.json")
      .then(response => response.json()) // response voib lyhemalt ka res kirjutada
      .then(json => {
        setParcelMachines(json);
        setDbParcelMachines(json);
        })
    }, []);


    const searchedRef = useRef();

  const searchFromParcelMachines = () => {
    const result = dbParcelMachines.filter(element =>
      element.NAME.toLowerCase().includes(searchedRef.current.value.toLowerCase())
    );
      setParcelMachines(result);
  }



  return (
   <>
        <label>Pakiautomaadid:</label>
        <input ref={searchedRef} onChange={searchFromParcelMachines} placeholder="Otsi siit" type="text" />
        <br />
         <select>

         {parcelMachines
         .filter(element => element.NAME !== "1.eelistus minu.omniva.ee-s")
         .filter(element => element.A0_NAME === "EE")
         .map(element => <option key={element.NAME}>{element.NAME}</option>)}
         {parcelMachines.length === 0 && <option disabled selected>Ei leitud</option>}
        </select>
   </>
  )
}

export default ParcelMachines;