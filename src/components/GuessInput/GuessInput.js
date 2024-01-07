import { useState } from 'react';

function GuessInput({ addNewGuess, disabled }) {
  const [guess, setGuess] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewGuess(guess);
    setGuess('');
  };
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        pattern="[A-Z]{5}"
        title="Must be a 5-letter word"
        disabled={disabled}
      ></input>
    </form>
  );
}

export default GuessInput;
