import React, { useState } from "react";
import "./styles.css";

// 複数のcheckedの状態をオブジェクトで管理する
const InputCheckBox = () => {
  const [checkedValues, setCheckedValues] = useState({
    'マウス' : false,
    'モニター' : false,
    'キーボード' : false
  });

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
      <label>
        <input type="checkbox" value="マウス" onChange={handleChange} checked={checkedValues['マウス']} />
        マウス
      </label>
      <label>
        <input type="checkbox" value="モニター" onChange={handleChange} checked={checkedValues['モニター']} />
        モニター
      </label>
      <label>
        <input type="checkbox" value="キーボード" onChange={handleChange} checked={checkedValues['キーボード']} />
        キーボード
      </label>
    </div>
  );
}

export default function App() {
  return <InputCheckBox />;
}
