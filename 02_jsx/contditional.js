


function App() {
    let isLogedIn = true;
    return (
        <>
        <h2>Hello, {isLogedIn ? "Alexa":"User"}</h2>
        <p>{isLogedIn && "Welcome to the portal"}</p>
        </>
    )
}


ReactDOM.createRoot(document.getElementById("root")).render(<App/>)