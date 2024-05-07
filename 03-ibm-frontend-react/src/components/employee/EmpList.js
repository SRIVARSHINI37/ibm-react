import axios from "axios";
import { useEffect, useState } from "react"


const EmpList = () => {
    const [empList , setEmpList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9090/emp/get-all-emps')
        .then((res)=>{
            console.log(res);
            setEmpList(res.data);
        })
    } , []);

    return(
        <>
           <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h3 className="text-center">Employee List</h3>
          <table className="table table-striped">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Aadhar</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              {empList.map(emp => (
                <tr key={emp.empid}>
                  <td>{emp.empid}</td>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.aadhaar}</td>
                  <td>{emp.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

        </>
    )
}
export default EmpList;