import { useState } from "react";


function Meist() {
  const [kontakt, n2itaKontakt] = useState("");
  const tootajad = [
    {nimi: "Arvo Part", ala: "Uudisklippide taustamuusika", telefon: "+31312312"},
    {nimi: "Kelly Sildaru", ala: "Pustolreporter", telefon: "+212124123"},
    {nimi: "Edward von Longus", ala: "Uudiste kujundamine", telefon: "+3131231231"},
    {nimi: "Kerli Koiv", ala: "Valisturgude spetsialist", telefon: "+312312312"}
  ]

  const [valitud, uuendaValitud] = useState("");

  const v6taYhendust = (tootaja) => {
    n2itaKontakt(tootaja.telefon);
    uuendaValitud(tootaja.nimi);
  }


  return ( <div>
    <div>See on meist leht, nahtav localhost:3000/meist aadressil</div>
    <div>Meie tootajad:</div>
    {/* VALITUD INIMENE: {valitud} */}
    <br />
    <div>{tootajad.map(tootaja =>
      <div className={tootaja.nimi === valitud ? "valitud" : undefined}>
        <div>{tootaja.nimi}</div>
        <div>{tootaja.ala}</div>
        <button onClick={() => v6taYhendust(tootaja)}>Vota uhendust</button>
        <br /> <br />
      </div>)}
    </div>
    {/* <div>Arvo Part</div>
    <div>Uudisklippide taustamuusika</div>
    <button onClick={() => n2itaKontakt('+31312312')}>Vota uhendust</button>
    <br /> <br />
    <div>Kelly Sildaru</div>
    <div>Pustolreporter</div>
    <button onClick={() => n2itaKontakt('+212124123')}>Vota uhendust</button>
    <br /> <br />
    <div>Edward von Longus</div>
    <div>Uudiste kujundamine</div>
    <button onClick={() => n2itaKontakt('+3131231231')}>Vota uhendust</button>
    <br /> <br />
    <div>Kerli Koiv</div>
    <div>Valisturgude spetsialist</div>
    <button onClick={() => n2itaKontakt('+312312312')}>Vota uhendust</button>
    <br /> <br /> */}
    { kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}
</div> );
}

export default Meist

