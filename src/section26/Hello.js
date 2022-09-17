const Hello = ({
    name,
    changeName,
    initialName
}) => {
    return (
        <>
            <p>
                Hello, <b>{name} !!</b>
                name の初期値: <b>{initialName}</b>
            </p>
            <input type="text" onChange={changeName} />
        </>
    );
};

export default Hello;