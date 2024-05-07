import React, { useState } from 'react';
import axios from 'axios';

const GetEmpById = () => {
  const [empId, setEmpId] = useState('');
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setEmpId(event.target.value);
  };

  const handleFetchData = async (event) => {
    event.preventDefault();
    try {
      // Send GET request to backend API to fetch employee data by ID
      const response = await axios.get(`http://localhost:9090/emp/get-emp-by-id/${empId}`);
      // Set the fetched employee data
      setEmployee(response.data);
      // Clear previous error
      setError(null);
    } catch (error) {
      console.error('Error fetching employee:', error);
      if (error.response && error.response.status === 404) {
        setError('Employee not found.');
      } else {
        setError('An error occurred while fetching employee. Please try again later.');
      }
      // Clear employee data on error
      setEmployee(null);
    }
  };

  return (
    <div>
      <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center">Fetch Employee Data</h2>
          <form onSubmit={handleFetchData}>
            <div className="mb-3">
              <label htmlFor="empId" className="form-label">Employee ID:</label>
              <input 
                type="text" 
                id="empId" 
                value={empId} 
                onChange={handleInputChange} 
                className="form-control" // Apply Bootstrap's form-control class
                required 
              />
            </div>
            <button type="submit" className="btn btn-primary">Fetch Data</button> {/* Apply Bootstrap's primary button style */}
          </form>
        </div>
      </div>
      
      {employee && (
        <div className="row justify-content-center mt-4"> {/* Add margin top */}
          <div className="col-md-8">
            <table className="table">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Salary</th>
                  {/* Add more table headers as needed */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{employee.empid}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.salary}</td>
                  {/* Add more table cells as needed */}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {error && (
        <div className="row justify-content-center mt-4"> {/* Add margin top */}
          <div className="col-md-6">
            <p className="text-danger">{error}</p> {/* Apply Bootstrap's text-danger class */}
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default GetEmpById;
