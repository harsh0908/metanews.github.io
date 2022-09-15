import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "./metalogo.png";

function NavBar(props) {
  // const current = new Date();
  // const date = `${current.getDate()}/${current.getMonth(3)+1}/${current.getFullYear()}`;
  // const date = Date.now();

  let location = useLocation();
  useEffect(() => {
    // console.log(location.pathname)
  }, [location]);

  const handlelogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    props.showAlert("Logout successfully", "success");
  };

  let navigate = useNavigate();
  return (
    <>
      <nav
        className={`navbar  navbar-expand-lg navbar-dark  bg-${
          props.mode === "light" ? "primary" : "dark"
        } text-${props.mode === "light" ? "dark" : "light"} sticky-top `}
      >
        <div className="container-fluid">
          <div className="container-fluid ">
            <img src={logo} alt="" width={70} className="mb-2" />
            <Link className="navbar-brand " to="/">
              News - <span className="fs-6"> Latest News</span>
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className={`nav-link ${
                    location.pathname === "/business" ? "active" : ""
                  }`}
                  to="/business"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className={`nav-link ${
                    location.pathname === "/entertainment" ? "active" : ""
                  }`}
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className={`nav-link ${
                    location.pathname === "/health" ? "active" : ""
                  }`}
                  to="/health"
                >
                  Health
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className={`nav-link ${
                    location.pathname === "/science" ? "active" : ""
                  }`}
                  to="/science"
                >
                  Science
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className={`nav-link ${
                    location.pathname === "/sports" ? "active" : ""
                  }`}
                  to="/sports"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className={`nav-link ${
                    location.pathname === "/technology" ? "active" : ""
                  }`}
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className={`nav-link ${
                    location.pathname === "/getnews" ? "active" : ""
                  }`}
                  to="/getnews"
                >
                  SendNews
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>

            {!localStorage.getItem("token") ? (
              <form className="d-flex ">
                <Link
                  className={`btn btn-${
                    props.mode === "light" ? "light" : "light"
                  } mx-2`}
                  to="/login"
                  role="button"
                >
                  Login
                </Link>
                {/* <Link className={`btn btn-${props.mode === "light" ? "light" : "light"} mx-2`} to="/admin" role="button">Admin</Link> */}
                {/* <Link className={`btn btn-${props.mode === "light" ? "primary" : "light"} mx-2`} to="/signup" role="button">Signup</Link> */}
              </form>
            ) : (
              <button
                onClick={handlelogout}
                className={`btn btn-${
                  props.mode === "light" ? "light" : "light"
                } mx-2`}
              >
                Logout{" "}
              </button>
            )}
            <div
              id="check"
              className={`container  form-check form-switch text-${
                props.mode === "light" ? "light" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                onClick={props.toggleMode}
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Mode
              </label>
            </div>
            {/* <div className={`d-flex mt-2 text-${props.mode === "light" ? "light" : "light"}`}> */}
            {/* <p>  */}
            {/* {new Intl.DateTimeFormat("en-GB", */}
            {/* {
                             year: "numeric",
                             month: "long",
                             day: "2-digit"
                         }).format()} */}
            {/* </p> */}
            {/* </div> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
