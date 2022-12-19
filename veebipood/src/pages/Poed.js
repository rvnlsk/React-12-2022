import { useRef, useState } from 'react';

function Poed() {
  const [poed, uuendaPoed] = useState(["Kristiine", "Kesklinnake", "Marja", "Telliskivi", "Kirsilinn", "Maalinn"])

  const paneTagasi = () => {
    uuendaPoed(["Kristiine", "Kesklinnake", "Marja", "Telliskivi", "Kirsilinn", "Maalinn"])
  }

  const sorteeriAZ = () => {
  poed.sort();
  console.log(poed);
  uuendaPoed(poed.slice());

  }

  const sorteeriZA = () => {
    poed.sort((a, b) => b.localeCompare(a));
    uuendaPoed(poed.slice());

 }

 const sorteeriTahtedeJarjekorras = () => {
  poed.sort((a, b) => a.length - b.length);
  uuendaPoed(poed.slice());

 }

 const sorteeriTahedVastupidi = () => {
  poed.sort((a, b) => b.length - a.length);
  uuendaPoed(poed.slice());

 }

 const filtreeriKivi = () => {
  const tulem = poed.filter(element => element.endsWith("kivi") === true);
  uuendaPoed(tulem);
 }

 const filtreeriLinn = () => {
  const tulem = poed.filter(element => element.includes("linn") === true);
  uuendaPoed(tulem);
 }

 const filtreeriTaheArv7 = () => {
  const tulem = poed.filter(element => element.length === 7);
  uuendaPoed(tulem);
 }

 const filtreeriTaheArvVaiksemKui7 = () => {
  const tulem = poed.filter(element => element.length < 7);
  uuendaPoed(tulem);
 }

 const filtreeriKellelKolmasS= () => {
  const tulem = poed.filter(element => element.charAt(2) === "s");
  uuendaPoed(tulem);
 }

 const muudaKoikiSuureks = () => {
  const tulem = poed.map(element => element.toUpperCase());
  uuendaPoed(tulem);

  }

  const muudaKoigilePikkuseNrLoppu = () => {
    const tulem = poed.map(element => element + element.length);
    uuendaPoed(tulem);
  }

  const muudaKoigileIAsemelO = () => {
    const tulem = poed.map(element => element.replaceAll("i", "o"));
    uuendaPoed(tulem);
  }

  const kustuta = (j2rjekorraNr) => {
    poed.splice(j2rjekorraNr, 1);
    uuendaPoed(poed.slice())

  }

  const poodRef = useRef();

  const lisa = () => {
    poed.push(poodRef.current.value);
    uuendaPoed(poed.slice());

  }


  return (
    <div>
    <div>
      
      <button onClick={paneTagasi}>Pane koik tagasi</button>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriTahtedeJarjekorras}>Sorteeri tahtede jargi</button>
      <button onClick={sorteeriTahedVastupidi}>Sorteeri tahtede jargi kahanevalt</button>
      <button onClick={filtreeriKivi}>Jata alles kivi lopuga sonad</button>
      <button onClick={filtreeriLinn}>Jata alles "linn" sisaldavad</button>
      <button onClick={filtreeriTaheArv7}>Jata alles kellel tahemarke 7</button>
      <button onClick={filtreeriTaheArvVaiksemKui7}>Jata alles kellel vaiksem kui 7</button>
      <button onClick={filtreeriKellelKolmasS}>Jata alles kellel kolmas taht S</button>
      <button onClick={muudaKoikiSuureks}>Muuda koik suurteks tahtedeks</button>
      <button onClick={muudaKoigilePikkuseNrLoppu}>Pikkuse nr loppu</button>
      <button onClick={muudaKoigileIAsemelO}>I asemel O</button>
      </div>



      <label>Poe nimi</label> <br />
      <input ref={poodRef} type="text" /> <br />
      <button onClick={lisa}>Lisa</button> <br />



      <div>{poed.lenght}</div>
        {poed.map((yksPood,index) => <div key={index}> 
        {index} {yksPood} 
        <button onClick={() => kustuta(index)}>x</button>
      </div>)} 
      <div>-----------------</div>
      <div>Kristiine</div>
      <div>Kesklinnake</div>
      <div>Marja</div>
      <div>Telliskivi</div>
      <div>----------------</div>
      <div>BMW</div>
      <div>Audi</div>
      <div>Mercedes</div>
      <div>{["BMW", "Audi", "Mercedes"].lenght}</div>
      {["BMW", "Audi", "Mercedes"].map((auto,i) => <div key={i}>{auto}</div>)}
    </div>
  )
}

export default Poed 