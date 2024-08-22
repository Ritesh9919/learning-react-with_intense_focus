let score = 0;
let wicket = 0;
const ballWiseResult = [];

function addScore(num) {
  if (wicket < 10) {
    ballWiseResult.push(num);
    score += num;
    rootElement.render(<App />);
    console.log(ballWiseResult);
  }
}

function addWicket() {
  if (wicket < 10) {
    ballWiseResult.push("W");
    wicket += 1;
    rootElement.render(<App />);
  }
}

const ScoreButtons = () => {
  return (
    <div>
      <button onClick={() => addScore(0)}>0</button>
      <button onClick={() => addScore(1)}>1</button>
      <button onClick={() => addScore(2)}>2</button>
      <button onClick={() => addScore(3)}>3</button>
      <button onClick={() => addScore(4)}>4</button>
      <button onClick={() => addScore(5)}>5</button>
      <button onClick={() => addScore(6)}>6</button>
      <button className="wicket" onClick={addWicket}>
        Wicket
      </button>
    </div>
  );
};

const Result = () => {
  return (
    <div>
      {ballWiseResult.map((res, index) => (
        <>
          {index % 6 == 0 ? <br /> : null}
          <span key={index}>{res == 0 ? <strong>.</strong> : res}</span>
          &nbsp;&nbsp;&nbsp;
        </>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <>
      <h1>SCORE KEEPER</h1>
      <h2>
        SCORE : {score}/{wicket}
      </h2>
      <ScoreButtons />
      <Result />
    </>
  );
};

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
