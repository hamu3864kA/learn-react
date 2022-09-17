import React, { useState } from "react";
import "./styles.css";

const INITIAL_COUNT = 0;
const INITIAL_NAME = 'JavaScript';

const SampleComponent = () => {
  const [count, setCount] = useState(INITIAL_COUNT);
  const [name, setName] = useState(INITIAL_NAME);

  // 状態更新関数にコールバックを渡した場合、コールバックの第一引数に現在の値が渡される
  const countIncrement = () => setCount((prev) => prev + 1);
  const countDecrement = () => setCount((prev) => prev - 1);
  const countReset = () => setCount(INITIAL_COUNT);

  const handleChangeName = (e) => setName(e.target.value);

  return (
    <div className="App">
      <p>
        現在のカウント数: <b>{count}</b>
        <br />
        count の初期値: <b>{INITIAL_COUNT}</b>
      </p>
      <button onClick={countIncrement}>+</button>
      <button onClick={countDecrement}>-</button>
      <button onClick={countReset}>{INITIAL_COUNT}</button>

      <p>
        Hello, <b>{name} !!</b>
        <br />
        nameの初期値: <b>{INITIAL_NAME}</b>
      </p>
      <input type="text" onChange={handleChangeName} />
    </div>
  );
};


export default function App() {
  return <>
    <SampleComponent />
    <SampleComponent />
  </>
}
