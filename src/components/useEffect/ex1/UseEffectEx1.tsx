import { useEffect, useState } from 'react'
import './UseEffectEx1.css'

export default function UseEffectEx1() {
    // const [ count, setCount ] = useState(0)

    // function addHandler() {
    //     setCount(count + 1)
    // }
    // useEffect(() => {
    //     document.title = `You have ${count} message${count === 1 ? '' : 's'}`
    // }, [count])
    // return (
    // <>
    //     <h2>{count}</h2>
    //     <button onClick={addHandler}>Add</button>
    // </>
    // )
    const [message, setMessage] = useState('You are the best!')
    const [loading, setLoading] = useState(false)


    function changeMessageHandler() {
        if(message === 'You are the best!') {
            setMessage('Questionable...')
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
        }, 2000);
        }   else {
            setMessage('You are the best!')
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
        }, 2000);
        }
    }
    return (
        <>
            <h1>{message}</h1>
            <button disabled={loading} onClick={changeMessageHandler}>Yes I am</button>
        </>
    )
}