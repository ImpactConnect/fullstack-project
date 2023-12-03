// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// // import {Reg_form} from './form';
// // import { Reg_form } from 'app/forms';
// import './RegisterPage.css';

// const RegisterPage = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     firstname: '',
//     lastname: '',
//     email: '',
//     password: '',
//   });

//   const { username, firstname, lastname, email, password } = formData;

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       await axios.post('http://127.0.0.1:5000/register', formData);
//       window.location.href = '/';
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Register</h1>
//       <form onSubmit={handleSubmit}>
//         <label>Username:</label>
//         <input type="text" name="username" value={username} onChange={handleChange} />
//         <label>Firstname:</label>
//         <input type="text" name="firstname" value={firstname} onChange={handleChange} />
//         <label>Lastname:</label>
//         <input type="text" name="lastname" value={lastname} onChange={handleChange} />
//         <label>Email:</label>
//         <input type="email" name="email" value={email} onChange={handleChange} />
//         <label>Password:</label>
//         <input type="password" name="password" value={password} onChange={handleChange} />
//         <button type="submit">Register</button>
//       </form>
//       <p>Already have an account? <Link to="/login">Login</Link></p>
//     </div>
//   );
// };

// export default RegisterPage;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './RegisterPage.css';


const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const { username, firstname, lastname, email, password } = formData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://127.0.0.1:5000/register', formData, {
        username,
        firstname,
        lastname,
        email,
        password,
      });
      window.location.href = '/login';  // Redirect to the login page after successful registration
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" name="username" value={username} onChange={handleChange} />
        <label>Firstname:</label>
        <input type="text" name="firstname" value={firstname} onChange={handleChange} />
        <label>Lastname:</label>
        <input type="text" name="lastname" value={lastname} onChange={handleChange} />
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleChange} />
        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default RegisterPage;
