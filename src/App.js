import React, { useState } from "react";
import "./styles.css";
const values = [
  {id: 1, item: 'マウス'},
  {id: 2, item: 'モニター'},
  {id: 3, item: 'キーボード'},
];

// サブになる関数コンポーネント
const CheckBtnItems = ({onChange, checked}) => {
  return values.map((value) => {
    return (
      <label key={value.id}>
        <input type="checkbox" value={value.item} onChange={onChange} checked={checked.includes(value.item)} />
        {value.item}
      </label>
    );
  });
}

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
      <CheckBtnItems onChange={handleChange} checked={checkedValues} />
    </div>
  );
}

export default function App() {
  return <InputCheckBox />;
}
