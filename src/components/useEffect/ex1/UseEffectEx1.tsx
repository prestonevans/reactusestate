import { useEffect, useState } from 'react'
import './UseEffectEx1.css'

export default function UseEffectEx1() {
    const [ count, setCount ] = useState(0)

    function addHandler() {
        setCount(count + 1)
    }
    useEffect(() => {
        document.title = `You have ${count} message${count === 1 ? '' : 's'}`
    }, [count])
    return (
    <>
        <h2>{count}</h2>
        <button onClick={addHandler}>Add</button>
    </>
    )
}