import React, { useState } from "react";
import "./styles.css";

const values = [
  {id: 1, item: '赤'},
  {id: 2, item: '青'},
  {id: 3, item: '黄'},
];
// 親コンポーネントから受け取る
// これは関数コンポーネントだとすると12行目にreturnがないと動作しないのでは？=> その通り
const RadioBtnItems = ({onChange, checked}) => {
  return values.map((value) => {
    return (
      <label key={value.id}>
        <input type="radio" value={value.item} onChange={onChange} checked={checked === value.item} />
      </label>
    );
  });
}

const InputRadio = () => {

  const [checkedValue, setCheckedValue] = useState(values[0]['item']);
  const handleChange = (event) => {
    setCheckedValue(event.target.value);
  }
  return (
    <div class="App">
      <p>
        現在選択されている値: <b>{checkedValue}</b>
      </p>
      <RadioBtnItems onChange={handleChange} checked={checkedValue} />
    </div>

  );
};

export default function App() {
  return <InputRadio />;
}
