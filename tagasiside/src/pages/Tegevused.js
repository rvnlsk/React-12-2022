import { useState } from "react";
import tegevusteFail from "../tegevused.json";

function Tegevused() {
  const [tegevused, uuendaTegevused] = useState(tegevusteFail);

  const n2itaKasutajaYks = () => {
    const vastus = tegevused.filter(element => element.userId === 1);
    uuendaTegevused(vastus);
  }

  const n2itaKasutajaKaks = () => {
    const vastus = tegevused.filter(element => element.userId === 2);
    uuendaTegevused(vastus);
  }

  const n2itaKasutajaKolm = () => {
    const vastus = tegevused.filter(element => element.userId === 3);
    uuendaTegevused(vastus);
  }


  const n2itaKoikMisValmis = () => {
    const vastus = tegevused.filter(element => element.completed === true);
    uuendaTegevused(vastus);
  }

  const n2itaKoikMisPoleValmis = () => {
    const vastus = tegevused.filter(element => element.completed === false);
    uuendaTegevused(vastus);
  }

  const n2itaKoikMisAlgavadTahegaT = () => {
    const vastus = tegevused.filter(element => element.title.startsWith("t") === true);
    uuendaTegevused(vastus);
  }

  const n2itaKoikiKusTahemarkeRohkemKui20 = () => {
    const vastus = tegevused.filter(element => element.title.length > 20);
    uuendaTegevused(vastus);
  }

  const n2itaK6iki = () => {
    uuendaTegevused(tegevusteFail);
  }

  return (
    <div>
      <div>{tegevused.length}</div>
      <button onClick={() => n2itaKasutajaYks()}>Kuva koik kasutaja ID 1 tegevused</button>
      <button onClick={() => n2itaKasutajaKaks()}>Kuva koik kasutaja ID 2 tegevused</button>
      <button onClick={() => n2itaKasutajaKolm()}>Kuva koik kasutaja ID 3 tegevused</button>
      <button onClick={n2itaKoikMisValmis}>Kuva koik valmis tegevused</button>
      <button onClick={n2itaKoikMisPoleValmis}>Kuva koik mittevalmis tegevused</button>
      <button onClick={n2itaKoikMisAlgavadTahegaT}>Kuva koik "t" tahega algavad tegevused</button>
      <button onClick={n2itaKoikiKusTahemarkeRohkemKui20}>Kuva tegevused, millel on tahemarke rohkem kui 20</button>
      <button onClick={() => n2itaK6iki()}>Kuva koik tegevused tagasi</button>
      {tegevused.map(element => 
      <div>
      <div>{element.userId}</div>
      <div>{element.id}</div>
      <div>{element.title}</div>
      <div>{element.completed}</div>
      <br />
      </div>)}
    </div>
  );
}
export default Tegevused;