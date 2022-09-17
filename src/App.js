import React, { useState } from "react";
import "./styles.css";

const values = [
  {id: 1, item: 'マウス'},
  {id: 2, item: 'モニター'},
  {id: 3, item: 'キーボード'}
];

const CheckBtnItems = ({onChange, checked}) => 
  values.map((value) => {
    return (
      <label key={value.id}>
        <input type="checkbox" onChange={onChange} value={value.item} checked={checked[value.item]} />
        {value.item}
      </label>
    );
  });

// 複数のcheckedの状態をオブジェクトで管理する
const InputCheckBox = () => {
  // これも畳み込み演算
  const [checkedValues, setCheckedValues] = useState(
    values.reduce((acc, cur) => {
      acc[cur.item] = false;
      return acc;
    }, {})
  );

  const handleChange = (event) => {
    // この書き方面白い
    // これまでセッションに格納されたオブジェクトと今回操作されたチェックボックスをマージした新しい状態を作っている
    setCheckedValues({...checkedValues, [event.target.value]: event.target.checked});
  };

  // 畳み込み演算をしている
  // checkedValuesに依存しているから変更の都度再計算される？
  const stateOfCheckedValues = Object.entries(checkedValues).reduce((pre, [key, value]) => {
    // 値がtrueの場合、そのキーを追加する
    // if (value) { pre.push(key); } と同じ
    value && pre.push(key);
    return pre;
  }, [] /* 初期値は空の配列. */);

  return (
    <div className="App">
      <p>
        現在選択されている値: <b>{stateOfCheckedValues.join('、')}</b>
      </p>
      <CheckBtnItems onChange={handleChange} checked={checkedValues} />
    </div>
  );
}

export default function App() {
  return <InputCheckBox />;
}
