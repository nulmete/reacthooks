import logo from './logo.svg';
import './App.css';
import { useState, useMemo } from 'react';
import { useFetch } from "./useFetch";

const computeLongestWord = (arr) => {
  if (!arr) {
    return [];
  }

  console.log('computing longest word');

  let longestWord = '';

  arr.forEach(sentence => {
    sentence.split(' ').forEach(word => {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    });
  });

  return longestWord;
}

function App() {
  const [count, setCount] = useState(0);
  const { data } = useFetch('https://raw.githubusercontent.com/ajzbc/kanye.rest/quotes/quotes.json');

  const longestWord = useMemo(() => computeLongestWord(data), [data]);

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      {/* <div>{computeLongestWord(data)}</div> */}
      <div>{longestWord}</div>
    </div>
  );
}

export default App;
