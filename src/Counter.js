import React,{useState} from 'react'
import {fizzbuzz} from './fizzBuzz';
import './App.css';

function Counter() {
    const [count,setCount]=useState(0);
    return (
        <div className="counter">
          <h2>{count>0 ? fizzbuzz(count) : 0}</h2>
          <button onClick={()=>{
              setCount(prevState=>prevState+1);              
              }}>Increase +</button>
        </div>
    )
}

export default Counter