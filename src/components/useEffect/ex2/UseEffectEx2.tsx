import { useEffect, useState } from 'react'
import './UseEffectEx2.css'
export default function UseEffectEx2() {
    const [ size, setSize ] = useState(window.innerWidth)
    const [ color, setColor ] = useState('pink')

    useEffect(() => {
        window.addEventListener('resize', checkSize)
        if(size > 1000) {
            setColor('red')
        } else {
            setColor('pink')
        }
        return () => {
            window.removeEventListener('resize', checkSize)
        }
    },[size])

    function checkSize() {
        setSize(window.innerWidth);
    }

    return (
        <h2 style={{color: color}}>useEffect cleanup</h2>
    )
}