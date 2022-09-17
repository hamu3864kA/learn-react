import React, { useState } from "react";
import "./styles.css";
import Counter from './section26/Counter';
import Hello from './section26/Hello';

export default function App() {

  const INITIAL_COUNT = 0;
  const INITIAL_NAME = 'JavaScript';

  const [count, setCount] = useState(INITIAL_COUNT);
  const [name, setName] = useState(INITIAL_NAME);

  // 状態更新関数にコールバックを渡した場合、コールバックの第一引数に現在の値が渡される
  const countIncrement = () => setCount((prev) => prev + 1);
  const countDecrement = () => setCount((prev) => prev - 1);
  const countReset = () => setCount(INITIAL_COUNT);

  const handleChangeName = (e) => setName(e.target.value);

  return (
    <div className="App">
      <p>ppp</p>
      <Counter
        count={count}
        countIncrement={countIncrement}
        countDecrement={countDecrement}
        countReset={countReset}
        initialCount={INITIAL_COUNT}
      />
      <Hello
        name={name}
        changeName={handleChangeName}
        initialName={INITIAL_NAME}
      />
    </div>
    
  );

}
