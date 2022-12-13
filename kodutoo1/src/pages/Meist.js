import { useState } from "react";

function Meist() {
  const [message, määraMessage] = useState("Vali tegevus");
  
  
  return (
    <div>
    <div> { message }</div>
    <button onClick={() => määraMessage("Selleks saada meile e-mail jobs@rvnlsk.com") }>Kandideeri tööle</button>
    <button onClick={() => määraMessage("Meil on 10 töötajat, info ilmub varsti")}>Vaata meie töötajaid</button>
    <button onClick={() => määraMessage("Mine lehele kontakt")}>Võta meiega ühendust</button>
    </div>
  );
  
}

export default Meist