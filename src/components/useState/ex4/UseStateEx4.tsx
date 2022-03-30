import { useState } from 'react'
import './UseStateEx4.css'

export default function UseStateEx4() {
    const  [count, setCount] = useState(0)

    function addHandler() {
        setCount(count + 1)
    }
    function subtractHandler() {
        if(count === 0) return
        setCount(count - 1)
    }
    function resetHandler() {
        setCount(0)
    }
    return (
        <>
            <button className='counter' onClick={addHandler}>+</button>
            <span>{count}</span>
            <button className='counter' onClick={subtractHandler} disabled={count === 0}>-</button>
            <button onClick={resetHandler} disabled={count === 0}>Reset</button>
        </>
    )
}