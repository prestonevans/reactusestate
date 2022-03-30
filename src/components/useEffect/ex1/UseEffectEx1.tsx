import { useEffect, useState } from 'react';
import Joke from '../Joke';
import { jokes } from '../jokes';
import './UseEffectEx1.css';

export default function UseEffectEx1() {
  const [jokes, setJokes] = useState<jokes[] | []>([]);

  const handleCancel = () => { 
      alert('sup')
   }
  useEffect(() => {
    async function getData() {
      const data = await fetch('https://opentdb.com/api.php?amount=10');
      const { results: joke } = await data.json();
      setJokes(joke);
    }
    getData();
  }, []);
  return jokes.length === 0 ? <p>loading</p> : <Joke onCancel={() => {handleCancel()}} jokes={jokes} />;
}


