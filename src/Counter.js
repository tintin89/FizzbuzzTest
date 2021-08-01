import React,{useState} from 'react'
import {fizzbuzz} from './fizzBuzz';
import './App.css';

function Counter() {
    const [count,setCount]=useState(1);
    return (
        <div className="counter">
          <h2>{count>0 ? fizzbuzz(count) : count}</h2>
          <div className="buttons">
          <button onClick={()=>setCount(prevState=>prevState-1)} style={{backgroundColor:"red"}}>Decrease -</button> 
          <button onClick={()=>{
              setCount(prevState=>prevState+1);              
              }}>Increase +</button>
          </div>
          <button onClick={()=>setCount(1)}
           style={{
              border:"5px solid #2e6474",
              marginTop:"1rem",
              fontWeight:"bold",
              color:"#2e6474",
              backgroundColor:"white",
              borderRadius:"100%",
              height:"100px",
              width:"100px"}}>Restart</button>
        </div>
    )
}

export default Counter