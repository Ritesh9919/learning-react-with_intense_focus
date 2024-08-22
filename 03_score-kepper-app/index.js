let score = 0;
let wicket = 0;

const App = ()=> {
    

    function addScore(num){
        score+=num;
        rootElement.render(<App/>);
        
        
    }

    

    return (
        <>
        <h1>SCORE KEEPER</h1>
        <h2>SCORE : {score}/{wicket}</h2>
        <div>
            <button onClick={()=> addScore(1)}>1</button>
            <button onClick={()=> addScore(2)}>2</button>
            <button onClick={()=> addScore(3)}>3</button>
            <button onClick={()=> addScore(4)}>4</button>
            <button onClick={()=> addScore(5)}>5</button>
            <button onClick={()=> addScore(6)}>6</button>
            <button className="wicket">Wicket</button>
        </div>
        </>
    )
}


const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App/>);