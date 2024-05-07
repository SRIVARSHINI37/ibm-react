import React, { useState, useEffect, dispatch } from 'react';
import axios from 'axios';
import UserService from '../../services/UserService';
import { userUpdateProfile } from '../../redux/UserSlice';
import { useSelector } from 'react-redux';

const UpdateEmployee = () => {
  const [empList, setEmpList] = useState([]);
  const [updateData, setUpdateData] = useState({
    empid: '',
    name: '',
    email: '',
    salary: ''
  });
  const token = useSelector(store => store.user.jwtToken);
  useEffect(() => {
    // Fetch list of employees from backend API
    axios.get('http://localhost:9090/emp/get-all-emps')
      .then(response => {
        setEmpList(response.data);
      })
      .catch(error => {
        console.error('Error fetching employees:', error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdateData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSelectChange = (event) => {
    // Fetch employee details based on selected employee ID
    const selectedEmpId = event.target.value;
    const selectedEmployee = empList.find(employee => employee.empid === selectedEmpId);
    setUpdateData(selectedEmployee || {
      empid: '',
      name: '',
      email: '',
      salary: ''
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
        const user = await axios.put('http://localhost:9090/emp/update-emp', updateData);
      console.log("Response from backend:", user);
      alert('mployee data updated successfully');
    } catch (error) {
      console.error('Error updating employee:', error);
      if(error.code === 'ERR_BAD_REQUEST')
        alert(error.message);
    }
  };

  return (
    <div>
      <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h3 className="text-center">Update Employee</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <select 
                name="empid" 
                onChange={handleSelectChange} 
                value={updateData.empid} 
                className="form-select" // Apply Bootstrap's form-select class
              >
                <option value="">Select an employee</option>
                {empList.map(employee => (
                  <option key={employee.empid} value={employee.empid}>{employee.name}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name:</label>
              <input 
                type="text" 
                name="name" 
                value={updateData.name} 
                onChange={handleInputChange} 
                className="form-control" // Apply Bootstrap's form-control class
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input 
                type="email" 
                name="email" 
                value={updateData.email} 
                onChange={handleInputChange} 
                className="form-control" // Apply Bootstrap's form-control class
              />
            </div>
            <div className="mb-3">
              <label htmlFor="salary" className="form-label">Salary:</label>
              <input 
                type="number" 
                name="salary" 
                value={updateData.salary} 
                onChange={handleInputChange} 
                className="form-control" // Apply Bootstrap's form-control class
              />
            </div>
            <button type="submit" className="btn btn-primary">Update</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UpdateEmployee;
