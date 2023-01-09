import { useState } from 'react';
import kasutajadFail from '../kasutajad.json';

function Kasutajad() {
    const [kasutajad, uuendaKasutajad] = useState(kasutajadFail);

    const allBack = () => {
        uuendaKasutajad(kasutajadFail);
    }

    const filterName = () => {
        const result = kasutajad.filter(kasutaja => kasutaja.username.length >= 10);
        uuendaKasutajad(result);
    }

    const findIndexAndDelete = (kasutaja) => {
        const index = kasutajad.indexOf(kasutaja);
        kasutajad.splice(index,1);
        uuendaKasutajad(kasutajad.slice());
    }

    const findIndexLucio = () => {
        const index = kasutajad.findIndex(kasutaja => kasutaja.email === "Lucio_Hettinger@annie.ca");
        console.log(index);
    }

   

    const findFirstNameC = () => {
        const found = kasutajad.find(kasutaja => kasutaja.name.substring(0,1) === "C");
        console.log(found);
    }

    const sortByLatitude = () => {
        kasutajad.sort((a,b) => a.address.geo.lat.localeCompare(b.address.geo.lat));
        uuendaKasutajad(kasutajad.slice());
    }

    const filterByLongitude = () => {
        const result = kasutajad.filter(kasutaja => kasutaja.address.geo.lng > 0);
        uuendaKasutajad(result);
    }

    const sumIds = () => {
        let sum = 0;
        kasutajad.forEach(kasutaja => sum = sum + kasutaja.id);
        console.log(sum);
    }

    const addToPhoneNumber = () => {
        const result = kasutajad.map(kasutaja => ({...kasutaja, phone: "000-"+kasutaja.phone}))
        uuendaKasutajad(result);
    }

    const replaceAllWithEmails = () => {
        const result = kasutajad.map(kasutaja => kasutaja.email);
        console.log(result);
    }

    const replaceCatchphraseLetter = () => {
        const result = kasutajad.map(kasutaja => (
            {...kasutaja, company: {...kasutaja.company, catchPhrase: kasutaja.company.catchPhrase.replaceAll("a", "e")}}
        ));
        uuendaKasutajad(result);
    }

  return (
    <div>
        <div>{kasutajad.length}</div>
        <button onClick={() => allBack()}>0</button>
        <button onClick={() => filterName()}>1</button>
        <button onClick={() => findIndexLucio()}>3</button>
        <button onClick={() => findFirstNameC()}>4</button>
        <button onClick={() => sortByLatitude()}>5</button>
        <button onClick={() => filterByLongitude()}>6</button>
        <button onClick={() => sumIds()}>7</button>
        <button onClick={() => addToPhoneNumber()}>8</button>
        <button onClick={() => replaceAllWithEmails()}>9</button>
        <button onClick={() => replaceCatchphraseLetter}>10</button>
        <div>{kasutajad.map(kasutaja =>
        <div>
            <div>{kasutaja.id}</div>
            <div>{kasutaja.name}</div>
            <div>{kasutaja.username}</div>
            <div>{kasutaja.email}</div>
            <div>{kasutaja.address.street}</div>
            <div>{kasutaja.address.suite}</div>
            <div>{kasutaja.address.city}</div>
            <div>{kasutaja.address.zipcode}</div>
            <div>{kasutaja.address.geo.lat}</div>
            <div>{kasutaja.address.geo.lng}</div>
            <div>{kasutaja.phone}</div>
            <div>{kasutaja.website}</div>
            <div>{kasutaja.company.name}</div>
            <div>{kasutaja.company.catchPhrase}</div>
            <div>{kasutaja.company.bs}</div>
            <button onClick={() => findIndexAndDelete(kasutaja)}>2</button>
            <br />
        </div>)}</div>

  </div> );
}

export default Kasutajad;