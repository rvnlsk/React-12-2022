
import { useRef, useState } from "react";


function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa uus toode!");
  const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();

  function lisa() {
    if (nimiRef.current.value === "") {
      uuendaSonum("Tuhja nimega ei saa toodet lisada!")
    } else {
      uuendaSonum("Uus toode lisatud" + nimiRef.current.value);

      let tootedLS = localStorage.getItem("tooted");
      tootedLS = JSON.parse(tootedLS) || [];
      const uusToode = {
        "nimi": nimiRef.current.value,
        "hind": hindRef.current.value,
        "pilt": piltRef.current.value,
        "aktiivne": aktiivneRef.current.value,
      }
      tootedLS.push(uusToode);
      tootedLS = JSON.stringify(tootedLS);
      localStorage.setItem("tooted", tootedLS);
      
    }
    
 }

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br />
      <input ref={nimiRef} type="text" /> <br />
      <label>Toote hind</label> <br />
      <input ref={hindRef} type="text" /> <br />
      <label>Toote pilt</label> <br />
      <input ref={piltRef} type="text" /> <br />
      <label>Toote aktiivsus</label> <br />
      <input ref={aktiivneRef} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button>
      </div>
  )
}

export default LisaToode
