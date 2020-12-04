import React, { useEffect, useState } from "react";
import { useFetch } from "./useFetch";

export const Hello = () => {
  // useEffect + useState to fetch from API
  // const [count, setCount] = useState(JSON.parse(window.localStorage.getItem('count'))); called everytime
  const [count, setCount] = useState(() => {
    return JSON.parse(localStorage.getItem('count')) || 0;
  });
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  // everytime count changes, save it to localStorage
  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  return (
    <div>
      <div>
        <div>{!data ? 'loading...' : data}</div>
        <div>count: {count}</div>
        <button onClick={() => setCount(c => c + 1)}>increment</button>
      </div>
    </div>
  );
}