


function App() {
    let isLogedIn = true;
    const name = "Ritesh";
    const lastName = "";
    return (
        <>
        <h2>Hello, {isLogedIn ? lastName || name:"User"}</h2>
        <p>{isLogedIn && "Welcome to the portal"}</p>
        
        </>
    )
}


ReactDOM.createRoot(document.getElementById("root")).render(<App/>)