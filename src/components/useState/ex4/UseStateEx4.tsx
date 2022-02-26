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
            <span onClick={addHandler}>+</span>
            <span>{count}</span>
            <span onClick={subtractHandler}>-</span>
            <button onClick={resetHandler} disabled={count === 0}>Reset</button>
        </>
    )
}