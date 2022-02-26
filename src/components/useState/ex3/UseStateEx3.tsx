import { useState } from 'react'
import './UseStateEx3.css'

export default function UseStateEx3() {
    const [ person, setPerson ] = useState({
        name: 'Peter',
        age: 24,
        message: 'You are the best!'
    })

    function handleClick() {
        if(person.message === 'You are the best!') {
            setPerson({...person, message: 'I don\'t know about you man'})
        } else {
            setPerson({...person, message: 'You are the best!'})
        }
    }

    return (
        <div className="card">
            <h2>{person.name}</h2>
            <p>Says: {person.message}</p>
            <button onClick={handleClick}>Press Me</button>
        </div>
    )
}