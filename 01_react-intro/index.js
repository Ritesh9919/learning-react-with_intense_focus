// using javascript
// const h1 = document.createElement('h1');
// h1.className = "heading";
// h1.textContent = "Hello World";
// const div = document.getElementById("root");
// div.append(h1);
// document.body.append(div);
// console.log(h1);


// using react in js
// const reactHeading = React.createElement('h1', {className:"heading", children:"Hello World"});
// console.log(reactHeading);
// ReactDOM.createRoot(document.getElementById('root')).render(reactHeading);

// const img = React.createElement('img', {src:"https://files.codingninjas.in/coding-ninjas-24647.png"});
// ReactDOM.createRoot(document.getElementById("root")).render(img);

// using jsx in react

const jsxHeading = (<h1>Hello World</h1>);
ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);

