
import { useState } from "react";


function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa uus toode!");

  function lisa() {
    uuendaSonum("Uus toode lisatud!");

  }

  

  return (
    <div>
      <div>{sonum}</div>
      <label htmlFor="">Toote nimi</label> <br />
      <input type="text" /> <br />
      <button onClick={lisa}>Sisesta</button>
      </div>
  )
}

export default LisaToode
