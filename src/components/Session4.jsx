import React from 'react'

import { NewRecord } from '../components/NewRecord';
import { UpdateRecord } from '../components/UpdateRecord';
export const Session4 = () => {
  return (
    <session4> <h2>Session 4 : Backend Integration Continuation and Redux</h2>
    <div><h5>Topics to cover :</h5>
      <ul>
        <li>Recap of session 3</li>
        <li>PUT/PATCH/UPDATE, DELETE</li>
        <li>Redux intro, synchronu vs async</li>
        <li>what are Redux thunk, Saga, Observables, flux </li>
        <li>React-redux set up
          <ul type='circle'>
            <li>In class based component uing CONNECT HOC</li>
            <li>In Functional components, redux hooks</li>
          </ul>
        </li>
        <li>Context API in React</li>


      </ul>
    </div>
    <NewRecord />
    <UpdateRecord />
  </session4>
  )
}
