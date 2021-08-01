import React,{useState} from 'react'

function Counter() {
    const [count,setCount]=useState(0);
    return (
        <div className="counter">
          <h2>{count}</h2>
          <button onClick={()=>setCount(prevState=>prevState+1)}>increment</button>
        </div>
    )
}

export default Counter