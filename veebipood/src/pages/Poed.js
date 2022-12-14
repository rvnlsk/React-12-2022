import { useRef, useState } from 'react';
import poedFailist from "../poed.json";

function Poed() {
  const [poed, uuendaPoed] = useState(poedFailist.slice());
  const poodRef = useRef();
  const aegRef = useRef();

  const paneTagasi = () => {
    uuendaPoed(poedFailist.slice());
  }

  const sorteeriAZ = () => {
  // poed.sort();
  poed.sort((a, b) => a.nimi.localeCompare(b.nimi));
  uuendaPoed(poed.slice());
//a on vasakpoolne, b on parempoolne

  }

  const sorteeriZA = () => {
    poed.sort((a, b) => b.nimi.localeCompare(a.nimi));
    uuendaPoed(poed.slice());

 }

 const sorteeriTahtedeJarjekorras = () => {
  poed.sort((a, b) => a.nimi.length - b.nimi.length);
  uuendaPoed(poed.slice());

 }

 const sorteeriTahedVastupidi = () => {
  poed.sort((a, b) => b.nimi.length - a.nimi.length);
  uuendaPoed(poed.slice());

 }

 const filtreeriKivi = () => {
  const tulem = poed.filter(element => element.nimi.endsWith("kivi") === true);
  uuendaPoed(tulem);
 }

 const filtreeriLinn = () => {
  const tulem = poed.filter(element => element.nimi.includes("linn") === true);
  uuendaPoed(tulem);
 }

 const filtreeriTaheArv7 = () => {
  const tulem = poed.filter(element => element.nimi.length === 7);
  uuendaPoed(tulem);
 }

 const filtreeriTaheArvVaiksemKui7 = () => {
  const tulem = poed.filter(element => element.nimi.length < 7);
  uuendaPoed(tulem);
 }

 const filtreeriKellelKolmasS= () => {
  const tulem = poed.filter(element => element.nimi.charAt(2) === "s");
  uuendaPoed(tulem);
 }

 const muudaKoikiSuureks = () => {
  const tulem = poed.map(element => {return{"nimi":element.nimi.toUpperCase(), "aeg": element.aeg}});
  uuendaPoed(tulem);

  }

  const muudaKoigilePikkuseNrLoppu = () => {
    const tulem = poed.map(element => {return{"nimi": element.nimi + element.nimi.length, "aeg": element.aeg}});
    uuendaPoed(tulem);
  }

  const muudaKoigileIAsemelO = () => {
    const tulem = poed.map(element => {return{"nimi": element.nimi.replaceAll("i", "o"), "aeg": element.aeg}});
    uuendaPoed(tulem);
  }

  const kustuta = (j2rjekorraNr) => {
    poed.splice(j2rjekorraNr, 1);
    uuendaPoed(poed.slice())

  }



  const lisa = () => {
    poed.push({"nimi": poodRef.current.value, "aeg": aegRef.current.value});
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
      <label>Poe lahtiolekuaeg</label> <br />
        <input ref={aegRef} type="text" /> <br />
      <button onClick={lisa}>Lisa</button> <br />



      <div>{poed.lenght}</div>
        {poed.map((yksPood,index) => <div key={index}> 
        {index} {yksPood.nimi} {yksPood.aeg}
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