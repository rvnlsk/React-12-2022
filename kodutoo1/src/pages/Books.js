import { useState } from "react";

function Books() {
    const [raamatud, uuendaRaamatud] = useState(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "The Catcher in the Rye", "Gone with the Wind"])

    const paneTagasi = () => {
        uuendaRaamatud(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "The Catcher in the Rye", "Gone with the Wind"])
    }

    const sorteeriAZ = () => {
        raamatud.sort();
        console.log(raamatud);
        uuendaRaamatud(raamatud.slice());
      
        }

    const sorteeriZA = () => {
        raamatud.sort((a, b) => b.localeCompare(a));
        uuendaRaamatud(raamatud.slice());
        
         }

    const sorteeriTahtedeJarjekorras = () => {
        raamatud.sort((a, b) => a.length - b.length);
        uuendaRaamatud(raamatud.slice());
          
        }

    const filtreeriThe = () => {
        const tulem = raamatud.filter(element => element.startsWith("The") === true);
        uuendaRaamatud(tulem);
           
        }

    const filtreeriAnd = () => {
        const tulem = raamatud.filter(element => element.includes("and") === true);
        uuendaRaamatud(tulem);
           
        }

    const filtreeriTaheArvSuuremKui10 = () => {
        const tulem = raamatud.filter(element => element.length > 10);
        uuendaRaamatud(tulem);
           
        }

    const filtreeriTaheArvVaiksemKui7 = () => {
        const tulem = raamatud.filter(element => element.length < 7);
        uuendaRaamatud(tulem);
           
        }

    const muudaKoikiSuureks = () => {
        const tulem = raamatud.map(element => element.toUpperCase());
        uuendaRaamatud(tulem);
          
        }

    const muudaKoikiVaikesteks = () => {
        const tulem = raamatud.map(element => element.toLowerCase());
        uuendaRaamatud(tulem);
          
        }

    const paneKoigileHyyumarkTaha = () => {
        const tulem = raamatud.map(element => element + "!");
        uuendaRaamatud(tulem);
    
        }

    const paneKoigilePunktLoppu = () => {
        const tulem = raamatud.map(element => element + ".");
        uuendaRaamatud(tulem);

        }



  return (
    <div>
        <button onClick={paneTagasi}>Pane koik tagasi</button>
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={sorteeriTahtedeJarjekorras}>Sorteeri sona pikkuse jargi</button>
        <button onClick={filtreeriThe}>Jata alles kus alguses "The"</button>
        <button onClick={filtreeriAnd}>Jata alles "and" sisaldavad</button>
        <button onClick={filtreeriTaheArvSuuremKui10}>Jata alles kellel suurem kui 10</button>
        <button onClick={filtreeriTaheArvVaiksemKui7}>Jata alles kellel vaiksem kui 7</button>
        <button onClick={muudaKoikiSuureks}>Muuda koik suurteks tahtedeks</button>
        <button onClick={muudaKoikiVaikesteks}>Muuda koik vaikesteks tahtedeks</button>
        <button onClick={paneKoigileHyyumarkTaha}>Pane hyyumark loppu</button>
        <button onClick={paneKoigilePunktLoppu}>Pane punkt loppu</button>




        <div>{raamatud.lenght}</div>
        {raamatud.map((yksRaamat,index) => <div key={index}>{yksRaamat}</div>)}
        <div>--------------------------</div>

    </div>
  )
}

export default Books