import React, { useState } from "react";
import "./styles.css";

const InputRadio = () => {
  const [checkedValue, setCheckedValue] = useState('赤');
  const handleChange = (event) => {
    setCheckedValue(event.target.value);
  }
  return (
    <div class="App">
      <p>
        現在選択されている値: <b>{checkedValue}</b>
      </p>
      <label>
        <input type="radio" value="赤" onChange={handleChange} checked={checkedValue === '赤'} />
        赤
      </label>
      <label>
        <input type="radio" value="青" onChange={handleChange} checked={checkedValue === '青'} />
        青
      </label>
      <label>
        <input type="radio" value="黄" onChange={handleChange} checked={checkedValue === '黄'} />
        黄
      </label>
    </div>

  );
};

export default function App() {
  return <InputRadio />;
}
