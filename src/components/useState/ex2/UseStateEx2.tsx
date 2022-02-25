import { useState } from "react"
import { people } from "../../../data/data"
import './UseStateEx2.css'

export default function UseStateEx2() {
    const [person, setPerson] = useState(people)

    function clickHandler() {
        setPerson([...person,{id:person.length + 1, name:'Larry'}])
    }
    
    function clearItems() {
        setPerson([])
    }
    return (
        <>
            <ol>
                {person.map(person => {
                    const { id, name } = person
                    return (
                            <li key={id}>{name}</li>
                    ) 
                })}
            </ol>
            <button onClick={clickHandler}>Add Person</button>
            <button onClick={clearItems}>Clear All</button>
        </>
    )
}