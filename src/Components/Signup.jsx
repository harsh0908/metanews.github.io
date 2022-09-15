import React, { useState } from "react";
import { useNavigate , Link } from "react-router-dom";
// import bg from './newsbg.jpg'

const Signup = (props ) => {
  
    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: ""
    });
    let navigate = useNavigate();
    let handleSubmit = async (e) => {
        e.preventDefault();
        const {name,email,password} = credentials;
        const response = await fetch("http://localhost:5000/auth/createuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name,email,password }),
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem("token", json.authtoken);
            props.showAlert("Account Created successfully", "success");
            navigate("/");
        } else {
            props.showAlert("Invalid credentials","danger");
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    
    return (
        // <div className={`my-2 text-${props.mode === "light" ? "dark" : "light"}`} >
        //     <h2 className=''>Create a New Account - MetaNotes</h2>
        //     <form onSubmit={handleSubmit}>
        //         <div className="mb-3">
        //             <label htmlFor="name" className="form-label">
        //                 Name
        //             </label>
        //             <input
        //                 type="text"
        //                 className="form-control"
        //                 onChange={onChange}
        //                 id="name"
        //                 name="name"
        //                 aria-describedby="emailHelp"
        //             />
        //         </div>
        //         <div className="mb-3">
        //             <label htmlFor="email" className="form-label">
        //                 Email address
        //             </label>
        //             <input
        //                 type="email"
        //                 className="form-control"
        //                 onChange={onChange}
        //                 id="email"
        //                 name="email"
        //                 aria-describedby="emailHelp"
        //             />
        //         </div>
        //         <div className="mb-3">
        //             <label htmlFor="password" className="form-label">
        //                 Password
        //             </label>
        //             <input
        //                 type="password"
        //                 className="form-control"
        //                 onChange={onChange}
        //                 name="password"
        //                 id="password" 
        //                 required minLength={5}
        //             />
        //         </div>

        //         <div className="mb-3">
        //             <label htmlFor="password" className="form-label">
        //                 Confirm Password
        //             </label>
        //             <input
        //                 type="password"
        //                 className="form-control"
        //                 onChange={onChange}
        //                 name="cpassword"
        //                 id="cpassword"
        //                 required minLength={5}
        //             />
        //         </div>

        //         <button type="submit" className="btn btn-primary">
        //             Submit
        //         </button>
        //     </form>
        // </div>

        <div>
<section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
               {/* eslint-disable-next-line  */}
        <img style={{marginTop :"-200px"}} src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="My Awesome Image" /> 
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form onSubmit={handleSubmit}>
          <div className={`d-flex flex-row align-items-center justify-content-center justify-content-lg-start  text-${props.mode === "light" ? "dark" : "light"}`}>
            <p className="lead fw-normal mb-0 me-3"><h3>Sign Up with</h3></p>
            <button type="button" className={`btn btn-${props.mode === "light" ? "primary" : "light"} btn-floating mx-1`}>
              <i className="fab fa-facebook-f"></i>
            </button>

            <button type="button" className={`btn btn-${props.mode === "light" ? "primary" : "light"} btn-floating mx-1`}>
              <i className="fab fa-twitter"></i>
            </button>

            <button type="button" className={`btn btn-${props.mode === "light" ? "primary" : "light"} btn-floating mx-1`}>
              <i className="fab fa-linkedin-in"></i>
            </button>
          </div>

          <div className={`divider d-flex align-items-center my-4  text-${props.mode === "light" ? "dark" : "light"}`}>
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          {/* <!-- Name input --> */}
          <div className={`form-outline mb-4 text-${props.mode === "light" ? "dark" : "light"} `}>
            <input className="form-control form-control-lg"   type="text" onChange={onChange}  id="name" name="name"  aria-describedby="emailHelp"
              placeholder="Enter a Name" />
            <label className="form-label" htmlFor="name">Name</label>
          </div>

          {/* <!-- Email input --> */}
          <div className={`form-outline mb-3 text-${props.mode === "light" ? "dark" : "light"} `}>
            <input   className="form-control form-control-lg"  type="email"
                        onChange={onChange}
                        id="email"
                        name="email"
                        aria-describedby="emailHelp"
              placeholder="Enter a valid email id" />
            <label className="form-label" htmlFor="email">Email Address</label>
          </div>

          {/* <!-- Password input --> */}
          <div className={`form-outline mb-3 text-${props.mode === "light" ? "dark" : "light"} `}>
            <input type="password"  className="form-control form-control-lg"  onChange={onChange} name="password" id="password"    required minLength={5}
              placeholder="Enter Password" />
            <label className="form-label" htmlFor="password">Password</label>
          </div>

           {/* <!-- C Password input --> */}
           {/* <div className={`form-outline mb-3 text-${props.mode === "light" ? "dark" : "light"} `}>
            <input type="password"  className="form-control form-control-lg"  onChange={onChange} name="cpassword" id="cpassword"    required minLength={5}
              placeholder="Enter Confirm Password" />
            <label className="form-label" htmlFor="password"> Confirm Password</label>
          </div> */}

          <div className="d-flex justify-content-between align-items-center">
            {/* <!-- Checkbox --> */}
            {/* <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" htmlFor="form2Example3">
                Remember me
              </label>
            </div> */}
            {/* <Link to="#!" className="text-body">Forgot password?</Link> */}
          </div>

          <div className="text-center text-lg-start mt-4 pt-2" >
            <button type="submit"  className={`btn btn-${props.mode === "light" ? "primary" : "light"} mx-2`} style={{ paddingLeft: '2.5rem' , paddingRight:'2.5rem' }}>Register</button>
            <p className={`small fw-bold mt-2 pt-1 mb-0 text-${props.mode === "light" ? "dark" : "light"} `}>  Already an account? <Link to="/login"
                className="link-danger">Login</Link></p><br /><br /><br /><br /><br /><br />
          </div>
        </form>
      </div>    
    </div>
  </div>
  <footer
    className={`d-flex container-fluid flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-${props.mode === "light" ? "primary" : "dark"} text-${props.mode === "light" ? "dark" : "light"}`}>
    {/* <!-- Copyright --> */}
    <div className="text-white mb-3 mb-md-0">
      Copyright © 2022. All rights reserved.
    </div>
    {/* <!-- Copyright --> */}

    {/* <!-- Right --> */}
    <div>
      <a href="https://www.instagram.com/harsh___.0908/" target="_black" className="text-white me-4">
        <i className="fab fa-facebook-f"></i>
      </a>
      <Link to="#!" className="text-white me-4">
        <i className="fab fa-twitter"></i>
      </Link>
      <Link to="#!" className="text-white me-4">
        <i className="fab fa-google"></i>
      </Link>
      <Link to="#!" className="text-white">
        <i className="fab fa-linkedin-in"></i>
      </Link>
    </div>
    {/* <!-- Right --> */}
  </footer>
</section>
</div>
    );
};

export default Signup;
