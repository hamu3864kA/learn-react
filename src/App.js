import React, { useState, useEffect } from "react";
import "./styles.css";
import Counter from './section26/Counter';
import Hello from './section26/Hello';

export default function App() {

  const INITIAL_COUNT = 0;

  const SampleComponent = () => {
    const [count, setCount] = useState(INITIAL_COUNT);

    const callbackFunction = () => {
      document.title = `${count}回クリックされました`;
    }

    useEffect(callbackFunction, [count]);

    const countIncrement = () => setCount((prevCount) => prevCount + 1);
    const countReset = () => setCount(INITIAL_COUNT);

    return (
      <div className="App">
        <p>現在のカウント数: {count}</p>
        <button onClick={countIncrement}>+1ボタン</button>
        <button onClick={countReset}>リセット</button>
      </div>
    );
  };

  return (
    <SampleComponent />
  );

}
