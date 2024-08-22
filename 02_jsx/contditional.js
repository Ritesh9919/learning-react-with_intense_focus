


function App() {
    let isLogedIn = false;
    return (
        <>
        <h2>Hello, {isLogedIn ? "Alexa":"User"}</h2>
        </>
    )
}


ReactDOM.createRoot(document.getElementById("root")).render(<App/>)