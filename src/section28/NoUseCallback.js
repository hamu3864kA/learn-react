import React, { useState } from "react";
import "./styles.css";

// useCallBackを使用しないパターン
// 5−28 p233-234

// Buttonコンポーネント（子）を作成
// counterStateとbuttonValueをpropsとしてCounterコンポーネント（親）から
// 受け取っているButtonコンポーネント（子）をReact.memo()でラップ
const Button = React.memo(({counterState, buttonValue}) => {
  console.log(`${buttonValue}がクリックされました！`);
  return <button onClick={counterState}>{buttonValue}</button>;
});

const Counter = () => {
  const [countStateA, setCountStateA] = useState(0);
  const [countStateB, setCountStateB] = useState(0);

  const countIncrementA = () => {
    setCountStateA(countStateA + 1);
  };

  const countIncrementB = () => {
    setCountStateB(countStateB + 1);
  };

  return (
    <>
      <p>A ボタン{countStateA}</p>
      <p>B ボタン{countStateB}</p>

      <Button counterState={countIncrementA} buttonValue="A ボタン" />
      <Button counterState={countIncrementB} buttonValue="B ボタン" />
    </>
  );
};

export default function App() {
  return <Counter />;
};
