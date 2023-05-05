import React from 'react';
import { useState } from 'react';

const user = {
  nombre: "Caca"
}
function MyButton() {
    const [count, setCount] = useState(0);
  const [name, setName] = useState("");
function click(){
   setCount(count + 1);
}
  return (
    <div>
    <button onClick={click}>
      Clicked 
    </button>
      <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        placeholder="Pon tu nombre:"
        />
      <h1>Tu nombre es: {name}</h1>
    <h1>
      {count}
      </h1>
    </div>
    
  );
}
export default function MyApp() {
  return (
    <div>
      <h1>Mi pagina con react</h1>
      <MyButton />
      <h1>{user.nombre}</h1>
    </div>
  );
}
