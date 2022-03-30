export type jokes = {
    category: 'string';
    correct_answer: 'string';
    difficulty: 'string';
    incorrect_answers: 'string'[];
    question: 'string';
    type: 'string';
};
export type JokeProps = {
    jokes: jokes[];
    onCancel: () => void;
}
