import React, { useState } from 'react';
import "./CssFile/mystyle.css";
import { Link, useNavigate } from 'react-router-dom';
// import Header from './Header';
import "./CssFile/Header.css";

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  let navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/loginuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const json = await response.json();

      if (!json.success) {
        alert("Invalid email or password");
      }

      if (json.success) {
        navigate("/home");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during login");
    }
  };

  return (
    <>
          <div className='containerbox'>
        <div className="formy">
          <div className="inputy">
            <div>
              <h2>Login</h2>
              <form onSubmit={handleLoginSubmit}>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    className='email'
                    type='text'
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email or phone number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    className="password"
                    name="password"
                    type='password'
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="submit">
                    Login
                  </button>
                </div>
              </form>
              <p>
                Don't have an account?{' '}
                <Link to="/signup" className="button">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
