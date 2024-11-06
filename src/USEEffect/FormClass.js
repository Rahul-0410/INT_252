import React, { Component } from "react";

class FormClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      age: '',
      errors: {},
    };
  }


  validateForm = () => {
    const { name, email, age } = this.state;
    const errors = {};

    
    if (!name) {
      errors.name = 'Name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      errors.email = 'Email is incorrect';
    }

    
    if (!age) {
      errors.age = 'Age is required';
    } else if (isNaN(age) || age <= 0) {
      errors.age = 'Age must be a valid number greater than 0';
    }

    return errors;
  };

 
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validateForm();

    if (Object.keys(errors).length === 0) {
     
      alert('Form submitted successfully!');
    
      this.setState({
        name: '',
        email: '',
        age: '',
        errors: {},
      });
    } else {
    
      this.setState({ errors });
    }
  };

  render() {
    const { name, email, age, errors } = this.state;

    return (
      <div style={{ maxWidth: '400px', margin: '100px auto' }}>
        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                style={{ display: 'block', width: '100%', padding: '8px', marginBottom: '5px' }}
              />
              {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
            </label>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                style={{ display: 'block', width: '100%', padding: '8px', marginBottom: '5px' }}
              />
              {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
            </label>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>
              Age:
              <input
                type="text"
                name="age"
                value={age}
                onChange={this.handleChange}
                style={{ display: 'block', width: '100%', padding: '8px', marginBottom: '5px' }}
              />
              {errors.age && <span style={{ color: 'red' }}>{errors.age}</span>}
            </label>
          </div>
          <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default FormClass;
