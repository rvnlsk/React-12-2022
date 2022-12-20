import { useRef } from "react";
import { useState } from "react";

function Tagasiside() {
    const [tagasiside, maaraTagasiside] = useState(["Oli hea", "Huvitav", "Teistsugune", "Ponev"]);
    const tagasisideRef = useRef();

    function kustuta(index) {
        tagasiside.splice(index,1);
        maaraTagasiside(tagasiside.slice());
    }

    function lisaUusTagasiside() {
        tagasiside.push(tagasisideRef.current.value);
        maaraTagasiside(tagasiside.slice());

    }

  return (
    <div>Tagasiside:
        {tagasiside.map((element, index) => 
        <div>
            <span>{element}</span>
            <button onClick={() => kustuta(index)}>X</button>
            </div>)}
            <br />
            <label>Lisa uus tagasiside:</label>
            <input ref={tagasisideRef} type="text" />
            <button onClick={() => lisaUusTagasiside()}>Sisesta</button>
    </div>)
  
}

export default Tagasiside;