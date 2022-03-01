import { useEffect, useState } from 'react'
import './UseEffectEx1.css'

type jokeProps = {
    category : 'string';
    correct_answer: 'string';
    difficulty: 'string';
    incorrect_answers: 'string'[];
    question:'string';
    type:'string';

}

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
    // const [message, setMessage] = useState('You are the best!')
    // const [loading, setLoading] = useState(false)


    // function changeMessageHandler() {
    //     if(message === 'You are the best!') {
    //         setMessage('Questionable...')
    //         setLoading(true)
    //         setTimeout(() => {
    //             setLoading(false)
    //     }, 2000);
    //     }   else {
    //         setMessage('You are the best!')
    //         setLoading(true)
    //         setTimeout(() => {
    //             setLoading(false)
    //     }, 2000);
    //     }
    // }
    const [jokes, setJokes] = useState([])

    useEffect(() => {
        async function getData() {
            const data = await fetch('https://opentdb.com/api.php?amount=10')
            const joke = await data.json()
            setJokes(joke.results)
        }
        getData()
    },[])
    return (
        <>
            <h1>Hello</h1>
            {jokes.map((joke:jokeProps,i) => {
                return (
                    <p key={i}>{joke.incorrect_answers.map((wrong:string) => {
                        return <span>{wrong}</span>
                    })}</p>
                )
            })}
        </>
    )
}