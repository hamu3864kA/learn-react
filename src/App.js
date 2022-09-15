import React, { useState } from "react";
import "./styles.css";

const InputSelectBox = () => {

  const values = [
    {id: 1, item: 'HTML'},
    {id: 2, item: 'CSS'},
    {id: 3, item: 'JavaScript'}
  ];
  
  // これ自体はReactオブジェクト？ではない
  // returnでReactオブジェクトを返す関数が関数コンポーネントになりうるのであって
  // 帰ってきた結果自体はコンポーネントそのものではない
  const SelectItems = values.map((value) => {
    return (
      <option key={value.id} value={value.item}>{value.item}</option>
    );
  });
  
  const [selectedValue, setSelectedValue] = useState(values[0].item);
  
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
   
  return (
    <div className="App">
      <p>
        現在選択されている値：
        <b>{selectedValue}</b>
      </p>
      <select value={selectedValue} onChange={handleChange}>
        {SelectItems}
      </select>
    </div>
  );
  
}

export default function App() {
  return <InputSelectBox />;
}
