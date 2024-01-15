import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [assignments, setAssignments] = useState([]);
  const navigate = useNavigate();

  
  const handleLogin = () => {
    const validEmail = 'sagar@gmail.com'; 
    const validPassword = '123'; 
  
    if (email === validEmail && password === validPassword) {
      console.warn('Login successful');
      navigate("/dashboard");
    } else {
      alert('Login failed. Please check your email and password.');
    }
  };
  

  return (
    <section className="login-block">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <form className="md-float-material form-material">
              <div className="text-center">
                <img
                  src={process.env.PUBLIC_URL + '/files/assets/images/auth/logo.png'}
                  alt="Small Logo"
                />
              </div>
              <div className="auth-box card">
                <div className="card-block">
                  <div className="row m-b-20">
                    <div className="col-md-12">
                      <h3 className="text-center">Sign In</h3>
                    </div>
                  </div>
                  <div className="form-group form-primary">
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="form-bar"></span>
                    <label className="float-label">Your Email Address</label>
                  </div>
                  <div className="form-group form-primary">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="form-bar"></span>
                    <label className="float-label">Password</label>
                  </div>
                  <div className="row m-t-25 text-left">
                    <div className="col-12">
                      <div className="checkbox-fade fade-in-primary d-">
                        <label>
                          <input type="checkbox" value="" />
                          <span className="cr">
                            <i className="cr-icon icofont icofont-ui-check txt-primary"></i>
                          </span>
                          <span className="text-inverse">Remember me</span>
                        </label>
                      </div>
                      <div className="forgot-phone text-right f-right">
                        <a href="/reset-password" className="text-right f-w-600">
                          Forgot Password?
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row m-t-30">
                    <div className="col-md-12">
                      <button
                        type="button"
                        className="btn btn-primary btn-md btn-block waves-effect waves-light text-center m-b-20"
                        onClick={handleLogin}
                      >
                        Sign in
                      </button>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-10">
                      <p className="text-inverse text-left m-b-0">Thank you.</p>
                      <p className="text-inverse text-left">
                        <a href="/">
                          <b>Back to website</b>
                        </a>
                      </p>
                    </div>
                    <div className="col-md-2">
                      <img
                        src={process.env.PUBLIC_URL + '/files/assets/images/auth/Logo-small-bottom.png'}
                        alt="Small Logo"
                      />
                    </div>
                  </div>
                  <ul>
                    {Array.isArray(assignments) ? (
                      assignments.map((assignment, index) => (
                        <li key={index}>
                          Email: {assignment.email}, Password: {assignment.password}
                        </li>
                      ))
                    ) : (
                      <li className="li"></li>
                    )}
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;

