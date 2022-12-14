import { useState } from 'react'

function Meist() {
  const [naitaEmaili, uuendaNaitaEmaili] = useState(false);
  const [telefon, uuendaTelefon] = useState(localStorage.getItem("meie_telefon"));

  return (
    <div>
      <div>Meie e-mail: 
        {naitaEmaili === true && localStorage.getItem("meie_email")} 
        {naitaEmaili === false && <button onClick={() => uuendaNaitaEmaili(true)}>Naita emaili</button> }
        </div>
      <div>Meie telefoninumber: 
        {telefon} 
       {telefon.startsWith("+372") === false && <button onClick={() => uuendaTelefon("+372" + telefon)}>Pane +372 ette</button>}
        </div>
      </div>
  )
}

export default Meist