// BannerPage.js
import React from 'react';
import '../App.css';
import "./CssFile/BannerPage.css";
import { NavLink } from 'react-router-dom';
// import "./CssFile/mystyle.css";
const BannerPage = () => {

  // const [formData, setFormData] = useState({
  //   number: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  //   location: '' // Assuming location is also a part of formData
  // });

  // let navigate = useNavigate();

  // const [isLogin, setIsLogin] = useState(true);

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  // const handleLoginSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch('http://localhost:5000/api/loginuser', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         email: formData.email,
  //         password: formData.password,
  //       }),
  //     });

  //     const json = await response.json();

  //     if (!json.success) {
  //       alert("Invalid email or password");
  //     }

  //     if (json.success) {
  //       navigate("/home");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     alert("An error occurred during login");
  //   }
  // };


  // const handleSignUpSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch('http://localhost:5000/api/signupuser', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         number: formData.number,
  //         email: formData.email,
  //         password: formData.password,
  //         confirmPassword: formData.confirmPassword,
  //         location: formData.location
  //       }),
  //     });

  //     const result = await response.json();

  //     console.log('Server Response:', result); // Log the response

  //     // Rest of the code...
  //   } catch (error) {
  //     console.error('Error during signup:', error.message);
  //   }
  // };

  return (
    <>
      <div className="banner-container">



        <div className="imgimgx">
          <img src="https://t4.ftcdn.net/jpg/04/57/27/57/360_F_457275775_zKthn4tQlf9e9EgRSEDCLeXmlp3ayDyi.jpg" alt="" id='imgimg' />
          <div>
     

            <div className="bannercircle">
       <img className="img-fluid" src="https://themewagon.github.io/restoran/img/hero.png" alt="" />
            </div>



            
            <NavLink to="/login" style={{ textDecoration: "none", color: "white", cursor: "pointer" }} id='loginxyz' >Login</NavLink>
            <NavLink to="/signup" style={{ textDecoration: "none", color: "white", cursor: "pointer" }} id='signupxyz' >SignUp</NavLink>

          </div>

          <h1 id='textanimation'>WELCOME to our site</h1>


          <img src="https://logos-world.net/wp-content/uploads/2021/02/Just-Eat-Logo-2001-2011.png" alt="" id='logoimg' />

          {/* 
          <div className='containerboxyz'>
            <div className="formx">
              <div className="inputx">
                {isLogin ? (
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
                        <button type="submit" className="submit">Login</button>
                      </div>
                    </form>
                    <p>
                      Don't have an account?{' '}
                      <button className="button" onClick={() => setIsLogin(false)}>
                        Sign Up
                      </button>
                    </p>
                  </div>
                ) : (
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
                      <button className="button" onClick={() => setIsLogin(true)}>
                        Login
                      </button>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div> */}


        </div>
      </div>






    </>
  );
};


export default BannerPage;
