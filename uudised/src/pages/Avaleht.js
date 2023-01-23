import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Avaleht() {
  const [postitused, uuendaPostitused] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => uuendaPostitused(data))
    
  }, []);



  return ( <div>
    <div>See on avaleht, nahtav localhost:3000 aadressil</div>
    <img src="https://i.pinimg.com/originals/0d/f9/39/0df939c8f3e4514d5164441db227a0e0.jpg" alt="" />
    { postitused.map(element => 
    <div>
    <div><i>{element.userId}</i></div>
    <div><u>{element.id}</u></div>
    <div><b>{element.title}</b></div>
    <div>{element.body}</div>
    <Link to={"kasutaja-postitus/" + element.userId}>
      <button>Koik kasutaja postitused</button>
    </Link>
    <Link to={"vaata-postitus/" + element.id}>
      <button>Vaata postitust</button>
    </Link>
    </div>
    ) }
  </div> );
  
}

export default Avaleht;