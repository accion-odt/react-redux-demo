import React, { useState } from 'react'
import { base_url, paths } from '../App';

export  const Session3 =()=> {
    const [name, setname] = useState("");
  const [id, setid] = useState("");
  const [address, setaddress] = useState("");
  const fetchMyEmployeesData = () => {
    fetch(base_url + paths.employee + ".json")
      .then((res) => {
        console.log(res);
        return res.json()
      })
      .then((res) => {
        console.log(res);
        setname(res.name);
        setid(res.id);
        setaddress(res.address);
        throw Error("random")
      }).catch(e => {
        console.log(e);
      })
  };
 
    return (
        <sesion3><h3>Session 3 : Backend Integration </h3>
        <div><h5>Topics Covered :</h5>
          <ul>
            <li>Recap of session 2</li>
            <li>App creation</li>
            <li>adding events for elements,arrow functions</li>
            <li>Firebase intro,why we need application layer, CRUD, REST, what firebase does in this context, why we picked fire base for example in session, and that java/c#/node js act as middle man b/w presentation layer and persistance layer</li>
            <li>CRUD topic - middle man b/w ui and db and making CREATE/POST and GET requets</li>
            <li>promises, fetch, async await, callback, MDN Web API's doc</li>
          </ul>
        </div>

        <div>
          <div>-----Submit to create a request and see the below line to see GET working.</div>
          <label>Please enter your name : </label>
          <input type={"text"}></input>
          <button
            onClick={() => {
              fetchMyEmployeesData();
            }}
          >
            Submit
          </button>
          <div>
            Name : {name}
            Id : {id}
            Address : {address}
          </div>
          {/* <button onClick={() => handleAddingNewrecord()}>Add new record</button> */}
        </div>
      </sesion3>
    )
  
}
