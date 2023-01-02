import { useState } from 'react'

function Ostukorv() {
  const [ostukorv, uuendaOstukorv] = useState(JSON.parse(localStorage.getItem("ostukorv")) || []);

  const kustuta = (i) => {
    ostukorv.splice(i,1);
    uuendaOstukorv(ostukorv.slice());
    localStorage.setItem("ostukorv", JSON.stringify(ostukorv));

  }

  const lisa = (toode) => {
    ostukorv.push(toode);
    uuendaOstukorv(ostukorv.slice());

  }

  const tyhjenda = () => {
    uuendaOstukorv([]);
    localStorage.setItem("ostukorv", JSON.stringify([]));
  }

  const arvutaKogusumma = () => {
    let kogusumma = 0;
    ostukorv.forEach(element => kogusumma = kogusumma + element.hind);
    return kogusumma.toFixed(2);
    // see toFixed teeb 2 komakohta kogusummas
  }

  return (
    <div>
      {ostukorv.length > 0 && <button onClick={tyhjenda}>Tyhjenda</button>}
      {ostukorv.length > 0 && <div>{ostukorv.length} tk</div>}
      {ostukorv.length === 0 && <div>Ostukorv on tyhi</div>}
      {ostukorv.map( (element, index) =>
       <div key={index}>
          <img src={element.pilt} alt="" />
          <div>{element.nimi}</div>
          <div>{element.hind} eur</div>
          <div>{element.aktiivne}</div>
        <button onClick={() => kustuta(index)}>x</button>
        <button onClick={() => lisa(element)}>+</button>
        
        </div>

        )}

        <div>Ostukorvi summa kokku: {arvutaKogusumma()} eur</div>
    </div>
  )
}

export default Ostukorv