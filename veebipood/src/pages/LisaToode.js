
import { useRef, useState } from "react";


function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa uus toode!");
  const inputiLuger = useRef();

  function lisa() {
    if (inputiLuger.current.value === "") {
      uuendaSonum("Tuhja nimega ei saa toodet lisada!")
    } else {
      uuendaSonum("Uus toode lisatud" + inputiLuger.current.value);

      let tootedLS = localStorage.getItem("tooted");
      tootedLS = JSON.parse(tootedLS) || [];
      tootedLS.push(inputiLuger.current.value);
      tootedLS = JSON.stringify(tootedLS);
      localStorage.setItem("tooted", tootedLS);
      
    }
    
 }

  return (
    <div>
      <div>{sonum}</div>
      <label htmlFor="">Toote nimi</label> <br />
      <input ref={inputiLuger} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button>
      </div>
  )
}

export default LisaToode
