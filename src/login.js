// JS to also update "welcome, Babe" to say "welcome, username" after username inputted and clear fields on form after submit
import React, {useState, useRef } from 'react';

export default function Login({ setUsername }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const formRef = useRef(null);

// change to input name
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(formData.username); 
    // update the username state
  
//clear form after submit   
  formRef.current.reset();
};

  return (
    <div>
      <h3>Log In</h3>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <button className="submitButton" type="submit">Submit</button>
      </form>
    </div>
  );
}
