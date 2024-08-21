


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



ReactDOM.createRoot(document.getElementById("root")).render(<Student/>)