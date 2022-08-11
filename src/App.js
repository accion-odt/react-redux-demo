
import './App.css';

import { Welcome } from "./components/Welcome";

import { useState } from "react";
import { Session1 } from './components/Session1';
import Session2 from './components/Session2';
import {Session3} from './components/Session3';
import { Session4 } from './components/Session4';
export const base_url =
  "https://react-demo-97e86-default-rtdb.asia-southeast1.firebasedatabase.app";
export const paths = {
  employee: "/employee",
};
// environmnetal variables
function App() {
  
  const handleAddingNewrecord = () => {
    fetch(base_url + paths.postUrl + ".json", {
      method: "POST",
      body: JSON.stringify({
        name: "React" + Math.random(),
        id: 2,
        address: "us",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>

      <Welcome />

     <div style={{margin:'20px',padding:'10px'}}>
     
      <Session1 />
      <Session2 />
      <Session3 />
      <Session4 />
      
      

     </div>
    </>
  );
}

export default App;

