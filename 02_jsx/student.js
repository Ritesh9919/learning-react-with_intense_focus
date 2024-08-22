



function Student() {
    const students = [
        {
            name:"Ritesh",
            age:25,
            mark:200
        },
        {
            name:"Pawan",
            age:17,
            mark:122
        },
        {
            name:"Aman",
            age:17,
            mark:100
        }
    ]
  return (
    <>

     <table border="2">
        <caption><h3>Student Table</h3></caption>
        <thead>
            <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Mark</th>
            </tr>
        </thead>
        <tbody>
            {students.map((student, index)=> 
             <tr key={index}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.mark}</td>
             </tr>
            )}
        </tbody>
     </table>
    </>
  )
}


function Car() {
    const cars = [
        {
            img:"https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name:"Audi",
            avaerage:12
        },
        {
            img:"https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name:"Nexa",
            avaerage:15
        },
        {
            img:"https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            name:"Toyota",
            avaerage:20
        }

    ]
    return (
        <>
         <table border="2">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Average</th>
                </tr>
            </thead>
            <tbody>
                {cars.map((car, index)=> 
             <tr key={index}>
                <td><img src={car.img}/></td>
                <td>{car.name}</td>
                <td>{car.avaerage}</td>
            </tr>
                )}

            </tbody>
         </table>
        </>
    )
}



function App() {
    let showCars = false;
    if(showCars) {
        return <Car/>
    }
    return (
        <>
        <Student/>
        </>
    )
}



ReactDOM.createRoot(document.getElementById("root")).render(<App/>)