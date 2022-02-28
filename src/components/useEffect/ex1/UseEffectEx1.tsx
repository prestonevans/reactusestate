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
    useEffect(()=> {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    },[message])

    function changeMessageHandler() {
        if(message === 'You are the best!') {
            setMessage('Questionable...')
        }   else {
            setMessage('You are the best!')
        }
    }
    return (
        <>
            <h1>{message}</h1>
            <button disabled={loading} onClick={changeMessageHandler}>Yes I am</button>
        </>
    )
}