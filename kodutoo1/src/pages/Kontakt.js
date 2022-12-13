import { useState } from "react";

function Kontakt() {
const [aadress, määraAadress] = useState("Tallinn");
const [telefon, määraTelefon] = useState("55676004");
const [email, määraEmail] = useState("rvnlsk@gmail.com");
const [ingliseKeelne, määraInglisekeelne] = useState("ei");

const ingliseks = () => {
  määraAadress("London");
  määraTelefon("55123123");
  määraEmail("kitsekool@gmail.com");
  määraInglisekeelne("jah");
}



  return (
    <div>
      <div>{ aadress }</div>
      <div>{ telefon }</div>
      <div>{ email }</div>
      <button onClick={ingliseks}>Muuda inglise keelseks</button>
      { ingliseKeelne === "jah" && <div>Leht on inglise keelne</div> }
    </div> 
    );
  
}

export default Kontakt