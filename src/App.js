import React, { useState,useEffect } from 'react';
import Button from "./components/Button.js"


var insanlar = [
  {
    isim: "emre",
    meslek: "frontend developer",
    yas: 34,
    seviye: 0
  },
  {
    isim: "ahmet",
    meslek: "frontend developer",
    yas: 34,
    seviye: 1
  },
  {
    isim: "mehmet",
    meslek: "frontend developer",
    yas: 34,
    seviye: 2
  }
]



function App() {

  const [counter, setCounter] = useState(0);
useEffect(()=>{console.log("mounting")
},[])

useEffect(()=>{console.log("mounting and update")},[counter])
  return (
    <div>
      <p>Count : {counter}</p>
      <Button buttonType="downBtn" buttonName="down" onClick={() => { setCounter(counter - 1) }} />
      {counter<=10&& (<Button buttonType="upBtn" buttonName="up" onClick={() => { setCounter(counter + 1) }} />
      )
      }
      
      <h1>İnsanlar Listesi</h1>
      {insanlar.map(insan => (
        <div><h2>{insan.isim}</h2></div>
      ))}
    </div>


  );
}

export default App;

