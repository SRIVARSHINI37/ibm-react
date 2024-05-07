import React, { useState } from 'react';
import axios from 'axios';

const DeleteEmp = () => {
  const [empId, setEmpId] = useState('');
  
  const handleInputChange = (event) => {
    setEmpId(event.target.value);
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      // Send DELETE request to backend API with the employee ID to be deleted
      const response = await axios.delete(`http://localhost:9090/emp/delete-emp/${empId}`);
      alert('Employee deleted successfully');
    } catch (error) {
      console.error('Error deleting employee:', error);
      if (error.response && error.response.status === 404) {
        alert('Employee not found.');
      } else {
        alert('An error occurred while deleting employee. Please try again later.');
      }
    }
  };

  return (
    <div>
        <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center">Delete Employee</h2>
          <form onSubmit={handleDelete}>
            <div className="mb-3">
              <label htmlFor="empId" className="form-label">Enter Employee ID:</label>
              <input 
                type="text" 
                id="empId" 
                value={empId} 
                onChange={handleInputChange} 
                className="form-control" // Apply Bootstrap's form-control class
                required 
              />
            </div>
            <button type="submit" className="btn btn-danger">Delete</button> {/* Apply Bootstrap's danger button style */}
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DeleteEmp;
