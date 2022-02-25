import { useState } from "react"
import { randomTitle } from '../../../data/data'
import './UseStateEx1.css'

export default function UseStateEx1() {
    const [ title, setTitle ] = useState('useState error example')

    function clickHanlder() {
        const current = randomTitle.indexOf(title)
        let randomQuote = Math.floor(Math.random()*randomTitle.length)
        while (current === randomQuote) {
            randomQuote = Math.floor(Math.random()*randomTitle.length)
        }
        setTitle(randomTitle[randomQuote])
    }

    return (
        <>
            <h2>{title}</h2>
            <button onClick={clickHanlder}>Click Me</button>
        </>
    )
}