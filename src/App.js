import logo from './logo.svg';
import './App.css';
import { useReducer, useState } from 'react';

function reducer(state, action) {
  // state: current value
  // action: function called - param received from dispatch(param)
  switch (action.type) {
    // case 'increment':
      // do not use 'state++' because it mutates the state
    //   return state + 1;
    // case 'decrement':
    //   return state - 1;
    case 'add-todo':
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
        todoCount: state.todoCount + 1
      }
    case 'toggle-todo':
      return {
        todos: state.todos.map((t, idx) => idx === action.idx ? { ...t, completed: !t.completed } : t),
        todoCount: state.todoCount
      }
    default:
      return state;
  }
}

function App() {
  // const [count, dispatch] = useReducer(reducer, 0);

  const [{ todos, todoCount }, dispatch] = useReducer(reducer, { todos: [], todoCount: 0 });
  const [text, setText] = useState();

  return (
    <div>
      {/* <div>count: {count}</div>
      <button onClick={() => dispatch({ type: 'increment' })}>increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button> */}

      <form onSubmit={e => {
        e.preventDefault();
        dispatch({ type: 'add-todo', text });
        setText('');
      }}>
        <input type="text" value={text || ''} onChange={e => setText(e.target.value)} />
      </form>

      {/* <pre>
        {JSON.stringify(todos, null, 2)}
      </pre> */}

      <div>number of todos: {todoCount}</div>

      {todos.map((t, idx) => (
        <div
          key={t.text}
          onClick={() => dispatch({ type: 'toggle-todo', idx })}
          style={{
            textDecoration: t.completed ? 'line-through' : ''
          }}
        >{t.text}</div>
      ))}
    </div>
  );
}

export default App;
