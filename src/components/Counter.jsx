import { useState } from "react";
import "../App.css";

function Counter(){

  const [count,setCount] = useState(0);

  return(
    <div className="container">

      <h1>Counter Application</h1>

      <div className="counter">{count}</div>

      <button onClick={()=>setCount(count+1)}>Increment</button>

      <button onClick={()=>setCount(count-1)}>Decrement</button>

      <button onClick={()=>setCount(0)}>Reset</button>

    </div>
  )
}

export default Counter;