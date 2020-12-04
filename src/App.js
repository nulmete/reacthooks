import logo from './logo.svg';
import './App.css';
import { Hello } from './Hello';
import { useCallback, useState } from 'react';
import { Square } from './Square';

function App() {
  const [count, setCount] = useState(0);
  const favoriteNums = [7, 21, 37];

  // when count or setCount change, increment fn is recreated
  // const increment = useCallback(() => {
  //   setCount(count + 1);
  // }, [count, setCount]);
  
  const increment = useCallback((n) => {
    setCount(c => c + n);
  }, [setCount]);

  return (
    <div>
      {/* this lambda is created on every single render */}
      <Hello increment={increment} />
      <div>count: {count}</div>

      {favoriteNums.map(n => {
        return (
          // <Square onClick={() => increment(n)} n={n} key={n} />

          // prevent re-rendering moving increment logic to Square component
          <Square increment={increment} n={n} key={n} />
        );
      })}
    </div>
  );
}

export default App;
