import React, { useState, useCallback } from "react";
import "./styles.css";

// 5-28 p230

// とりあえずのメモ化
const Button = React.memo(({counterState, buttonValue}) => {
  console.log(`${buttonValue}がクリックされました`);
  return <button onClick={counterState}>{buttonValue}</button>;
});

const Counter = () => {
  const [countStateA, setCountStateA] = useState(0);
  const [countStateB, setCountStateB] = useState(0);
  const [countStateC, setCountStateC] = useState(0);

  const countIncrementA = useCallback(() => 
    setCountStateA(countStateA + 1), [countStateA]);
  const countIncrementB = useCallback(() =>
    setCountStateB(countStateB + 1), [countStateB]);
  const countIncrementC = () => {
    setCountStateC(countStateC + 1);
  };

  return(
    <>
      <p>A ボタン {countStateA}</p>
      <p>B ボタン {countStateB}</p>
      <p>C ボタン {countStateC}</p>

      <Button counterState={countIncrementA} buttonValue="A ボタン" />
      <Button counterState={countIncrementB} buttonValue="B ボタン" />
      <Button counterState={countIncrementC} buttonValue="C ボタン" />
    </>
  );
};

export default function App() {
  return <Counter />
}

// あくまで子には関数のみ渡している
// 関数を通して、親が持っている状態countStateXが変更されるので親が再レンダリング
// でも関数自体が依存しているcountStateXが変更されていない子コンポーネントには影響がない