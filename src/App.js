import React, { useState } from "react";
import "./styles.css";

const InputCheckBox = () => {
  const [checkedValues, setCheckedValues] = useState([]);
  const handleChange = (event) => {
    if (checkedValues.includes(event.target.value)) {
      // 要するにチェックが外された場合
      setCheckedValues(checkedValues.filter((checkedValue) => checkedValue !== event.target.value));
    } else {
      // チェックが付けられた場合
      setCheckedValues([...checkedValues, event.target.value]);
    }

  }
  return (
    <div className="App">
      <p>
        現在選択されている値: <b>{checkedValues.join('、')}</b>
      </p>
      <label>
        <input type="checkbox" value="マウス" onChange={handleChange} checked={checkedValues.includes('マウス')}/>
        マウス
      </label>
      <label >
        <input type="checkbox" value="モニター" onChange={handleChange} checked={checkedValues.includes('モニター')}/>
        モニター
      </label>
      <label >
        <input type="checkbox" value="キーボード" onChange={handleChange} checked={checkedValues.includes('キーボード')}/>
        キーボード
      </label>
    </div>
  );
}

export default function App() {
  return <InputCheckBox />;
}
