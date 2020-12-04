import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { useForm } from './useForm';
import { Hello } from './Hello';
import { useFetch } from './useFetch';

function App() {
  // useState - Normal
  // const [count, setCount] = useState(10);

  // useState - Object
  // const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 });

  // useState - Split
  // const [count, setCount] = useState(10);
  // const [count2, setCount2] = useState(20);

  // useState - Form
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [values, handleChange] = useForm({ email: '', password: '', firstName: '' });

  // useEffect
  // useEffect(() => {
  //   console.log('render');

  //   // cleanup function (unmount)
  //   return () => {
  //     console.log('unmount');
  //   }
  // }, [values.email]);

  // useEffect with child component
  const [showHello, setShowHello] = useState(true);

  // useEffect + useState to fetch from API
  // const [count, setCount] = useState(JSON.parse(window.localStorage.getItem('count'))); called everytime
  // const [count, setCount] = useState(() => {
  //   return JSON.parse(localStorage.getItem('count')) || 0;
  // });
  // const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  // everytime count changes, save it to localStorage
  // useEffect(() => {
  //   localStorage.setItem('count', JSON.stringify(count));
  // }, [count]);

  // useRef
  const inputRef = useRef();

  return (
    <div className="App">
      {/* Normal */}
      {/* <button onClick={() => setCount(count + 1)}>+</button> */}
      {/* <button onClick={() => setCount(currentCount => currentCount + 1)}>+</button> */}

      {/* Object */}
      {/* <button onClick={() => setCount(currentState => ({ ...currentState, count: currentState.count + 1 }))}>+</button> */}

      {/* Split */}
      {/* <button
        onClick={() => {
          setCount(c => c + 1);
          setCount2(c => c + 1);
        }}
      >
        +
      </button>
      <div>count 1: {count}</div>
      <div>count 2: {count2}</div> */}

      {/* Form */}
      {/* <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} /> */}
      
      {/* useEffect with child component */}
      <button onClick={() => setShowHello(!showHello)}>toggle hello</button>
      {showHello && <Hello />}

      {/* custom useEffect + useState */}
      {/* <div>
        <div>{!data ? 'loading...' : data}</div>
        <div>count: {count}</div>
        <button onClick={() => setCount(c => c + 1)}>increment</button>
      </div> */}

      <input ref={inputRef} type="email" placeholder="email" name="email" value={values.email} onChange={handleChange} />
      <input type="text" placeholder="first name" name="firstName" value={values.firstName} onChange={handleChange} />
      <input type="password" placeholder="password" name="password" value={values.password} onChange={handleChange} />

      <button onClick={() => {
        inputRef.current.focus();
      }}>focus</button>
    </div>
  );
}

export default App;
