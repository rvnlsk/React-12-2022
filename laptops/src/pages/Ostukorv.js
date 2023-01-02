import { useState } from "react";

function Ostukorv() {
    const [margid, uuendaMargid] = useState(JSON.parse(localStorage.getItem("margidOstukorvisVoti")) || []);

    const kustuta = (index) => {
        margid.splice(index,1);
        uuendaMargid(margid.slice());
        localStorage.setItem("margidOstukorvisVoti", JSON.stringify(margid));

    }



  return (
    <div>
        {margid.map((element,index) => 
        <div key={index}>
        {element} 
        <button onClick={() => kustuta(index)}>x</button> 
        </div>)}
    </div> );
  
}

export default Ostukorv;