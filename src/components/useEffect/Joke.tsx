import { JokeProps } from './jokes';

function Joke({ jokes, onCancel }: JokeProps) {
  return (
    <>
      <h1>Hello</h1>
      {jokes.map((joke, i) => {
        return (
          <p key={i}>
            {joke.incorrect_answers.map((wrong, i) => {
              return <span key={i}>{wrong}</span>;
            })}
          </p>
        );
      })}
      <button onClick={onCancel}>Cancel</button>
    </>
  );
}
export default Joke;
