// NOTE: 初期値等はともかく現在値やそれを変更するのはこのCounter内部でやるべきでは？
const Counter = ({
    count,
    countIncrement,
    countDecrement,
    countReset,
    initialCount
}) => {
    return (
        <>
            <p>
                現在のカウント数: <b>{count}</b>
                count の初期値: <b>{initialCount}</b>
            </p>
            <button onClick={countIncrement}>increment</button>
            <button onClick={countDecrement}>decrement</button>
            <button onClick={countReset}>reset</button>
        </>
    );
}

// export default Hoge = () => {...} のように関数式によるデフォルトエクスポートはできない
export default Counter;