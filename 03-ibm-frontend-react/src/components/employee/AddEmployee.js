import React, { useState } from "react";
import axios from "axios";

const AddEmp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        aadhaar: '',
        salary: ''
    });
    const [errors, setErrors] = useState({});
    const handleChange = (evt) => {
       setFormData({
        ...formData,
        [evt.target.name] : evt.target.value
       });
       
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            axios.post('http://localhost:9090/emp/add-emp', formData)
                .then((res) => {
                    console.log(res.data);
                    alert('Employee added successfully!');
                })
                .catch((error) => {
                    console.error('Error adding employee:', error);
                    alert('Error adding employee. Please try again later.');
                });
        }
    };

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if(formData.name.length<3 || formData.name.length>15){
            errors.name = 'Name should be between 4 to 15 characters'
            isValid = false;
        }
        // Validate Aadhaar
        if (!/^\d{12}$/.test(formData.aadhaar)) {
            errors.aadhaar = 'Aadhaar must be a 12-digit number';
            isValid = false;
        }

        // Validate Email
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Invalid email address';
            isValid = false;
        }
        if((formData.salary)<0){
            errors.salary = 'Salary cant be negative';
            isValid = false;
        }
        setErrors(errors);
        return isValid;
    };

    return (
        <>
        <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
        <h3>Add Employee</h3>
          <form onSubmit={handleSubmit} className="needs-validation">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name:</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className={`form-control ${errors.name ? 'is-invalid' : ''}`} 
                required 
                autoFocus 
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                required 
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="aadhaar" className="form-label">Aadhaar:</label>
              <input 
                type="text" 
                name="aadhaar" 
                value={formData.aadhaar} 
                onChange={handleChange} 
                className={`form-control ${errors.aadhaar ? 'is-invalid' : ''}`} 
                required 
              />
              {errors.aadhaar && <div className="invalid-feedback">{errors.aadhaar}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="salary" className="form-label">Salary:</label>
              <input 
                type="text" 
                name="salary" 
                value={formData.salary} 
                onChange={handleChange} 
                className={`form-control ${errors.salary ? 'is-invalid' : ''}`} 
                required 
              />
              {errors.salary && <div className="invalid-feedback">{errors.salary}</div>}
            </div>
            <button type="submit" className="btn btn-primary">Add Employee</button>
          </form>
        </div>
      </div>
    </div>
        </>
    );
};

export default AddEmp;
