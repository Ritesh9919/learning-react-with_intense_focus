
function App() {
    const name = "Ritesh";
    const age = 25;
    const demo1 = null;
    const demo2 = undefined;
    const demo3 = true;
  
    function sum() {
        const x = 10 + 12;
        return x;
    }

    const header = <h2>JSX Expression</h2>

    // array and object
    const numbers = [1, 2, 3, 4, 5];
    const user = {name:"Ritesh", age:25}

    return (
        <>
        <h1>Let's learn JSX!</h1>
        {header}
        <h2>Hello {name}</h2>
        <h3>Your age is: {age}</h3>
        <p>Null Value: {demo1}</p>
        <p>Undefined Value: {demo2}</p>
        <p>Boolean Value: {demo3}</p>
        <p>Calling a function: {sum()}</p>
        {/* rendering array */}
        {numbers.map((num, index)=> 
         <h2 key={index}>{num}</h2>
        )}

         {/* rendering object */}
         <h3>My name is: {user.name} and my age is: {user.age}</h3>
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App/>)