import React, { useState } from 'react';
import "./CssFile/mystyle.css";
import { Link,useNavigate} from 'react-router-dom';
// import Header from './Header';

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: '',
    password: '',
    confirmPassword: '',
  });

  let navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();


    try {
      const response = await fetch('http://localhost:5000/api/signupuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          number: formData.number,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          location: formData.location
        }),
      });

      const result = await response.json();
      navigate("/home");

      console.log('Server Response:', result); // Log the response
      // alert("Successfully Created Account");


      // Rest of the code...
    } catch (error) {
      console.error('Error during signup:', error.message);
    }
  }




  return (
    <>
          <div className='containerbox'>
        <div className="formy">
          <div className="inputy">
            <div>
              <h2>Sign Up</h2>
              <form onSubmit={handleSignUpSubmit}>
                <div className="form-group">
                  <label htmlFor="number">Name</label>
                  <input
                    type='text'
                    className="name"
                    name="name"
                    value={formData.number}
                    onChange={handleChange}
                    placeholder="Enter Your Mobile Number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type='text'
                    className="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
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
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    className="confirmPassword"
                    name="confirmPassword"
                    type='password'
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    required
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="submit">Sign Up</button>
                </div>
              </form>
              <p>
                Already have an account?{' '}
                <Link to="/login" className="button">Login</Link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
