import React, {useState} from 'react';


export const Counter = () => {
const [count, setCount] = useState(0)

const increment = ()=>{
    setCount(count + 1)
}
const decrement = () => {
    setCount(count - 1)
}

const reset = () => {
    setCount(0)
}
return(
    <>
    <h1>Counter App</h1>
    <span className = 'title'>Current Count: {count}</span>
    <section className = 'buttons'>
        <button onClick= {increment}>+</button>
        <button onClick= {decrement}>-</button>
        <button onClick= {reset}>Reset</button>
    </section>
</>
)
}

export default Counter