import React, { useState } from "react";
import "./styles.css";

// CounterResultコンポーネント（子）を作成
// Counterコンポーネント（親）から `text` と `countState` をpropとして
// 受け取っている CounterResultコンポーネント（子）を `React.memo()` でラップ
const CountResult = React.memo(({text, countState}) => {
  // Counterコンポーネント（親）のボタンがクリックされて
  // Counterコンポーネント（親）の持つ `countState` が更新されたら
  // CounterResultコンポーネント（子）が再レンダリングされる
  // - 逆に言えば引数が変わらない限りは再レンダリングはされないということ
  console.log(`${text}ボタンがクリックされました`);
  // 内部でさらに `useState` とかしちゃうと結局再度レンダリングが発生してしまう
  return(
    <p>
      {text} : {countState}
    </p>
  );
});

const NoWrapCountResult = ({text, countState}) => {
  console.log(`${text}ボタンがクリックされました`);
  return (
    <p>
      {text} : {countState}
    </p>
  );
};

// countStateA/countStateBはCounterで状態管理している
// ので、変更があった場合、本来はCounter及びCounterResult両方とも再レンダリングされるはずだが
// memo化しているのでボタンが押された方しか再レンダリングされない、と
const Counter = () => {
  const [countStateA, setCountStateA] = useState(0);
  const [countStateB, setCountStateB] = useState(0);
  const [countStateC, setCountStateC] = useState(0);

  const countIncrementA = () => {
    setCountStateA((prevCount) => prevCount + 1);
  };

  const countIncrementB = () => {
    setCountStateB((prevCount) => prevCount + 1);
  };

  const countIncrementC = () => {
    setCountStateC((prevCount) => prevCount + 1);
  };

  console.log('親コンポーネントがレンダリングされました');

  return (
    <>
      <CountResult text="Aボタン" countState={countStateA} />
      <CountResult text="Bボタン" countState={countStateB} />
      <NoWrapCountResult text="Cボタン" countState={countStateC} />
      <button onClick={countIncrementA}>A ボタン</button>
      <button onClick={countIncrementB}>B ボタン</button>
      <button onClick={countIncrementC}>C ボタン</button> {/* こいつはラップされていないので常に再レンダリングされる */}
    </>
  );
}

export default function App() {
  return <Counter />
}