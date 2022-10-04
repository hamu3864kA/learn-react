import React, { useState, useMemo} from "react";
import "./styles.css";

// 正方形の面積を求めるsquare関数を宣言
const square = (params) => {
    const testData = [...Array(1000).keys(1000)];
    testData.forEach(() => {
        console.log(`「計算 B + 1」がボタンクリックされ、squre関数実行、
        ループ処理を${testData.length}回実行中`)
    });
    return params * params;
}

const Counter = () => {
    const [countStateA, setCountStateA] = useState(0);
    const [countStateB, setCountStateB] = useState(0);

    const countResultA = () => {
        setCountStateA((prevCount) => prevCount + 1);
        console.log('計算: A + 1ボタンがクリックされました');
    };

    const countResultB = () => {
        setCountStateB((prevCount) => prevCount + 1);
        console.log('計算: B + 1ボタンがクリックされました');
    }

    const squareArea = useMemo(() => square(countStateB), [countStateB]);

    return (
        <>
            <p>
                計算結果A: {countStateA}
                <button onClick={countResultA}>計算: A + 1</button>
            </p>
            <p>
                計算結果B: {countStateB}
                <button onClick={countResultB}>計算: B + 1 </button>
            </p>
            <p>【正方形の面積】</p>
            <p>計算結果B * 計算結果B = {squareArea}</p>
        </>
    );
};

export default function App() {
    return <Counter />;
}