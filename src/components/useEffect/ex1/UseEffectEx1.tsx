import { useEffect, useState } from 'react'
import './UseEffectEx1.css'

export default function UseEffectEx1() {
    const [title, setTitle ] = useState(' useEffect Basics')
    const [ hello, setHello ] = useState('hello')
    useEffect(()=> {
        setTimeout(() => {
            setTitle('I got this stuff');
            console.log('yep')
        }, 2000);
    },[title])
    useEffect(() => {
        console.log(hello)
    },[hello])

    function helloHandler() {
        setHello(`${Math.floor(Math.random()*2)}`)
    }
    console.log('Render component')
    return (
    <>
        <h2>{title}</h2>
        <button onClick={helloHandler}>Log Hello</button>
    </>
    )
}