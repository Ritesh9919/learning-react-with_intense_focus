

const App = ()=> {
    let score = 0;
    let wicket = 0;

    const clickOne = ()=> {
        alert("1 is clicket");
    }

    return (
        <>
        <h1>SCORE KEEPER</h1>
        <h2>SCORE : {score}/{wicket}</h2>
        <div>
            <button onClick={clickOne}>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button className="wicket">Wicket</button>
        </div>
        </>
    )
}


ReactDOM.createRoot(document.getElementById("root")).render(<App/>);