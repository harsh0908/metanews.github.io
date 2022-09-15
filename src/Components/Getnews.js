import Contect from "./Contect";
import Notes from "./Notes";
import {  Link } from "react-router-dom";




function Getnews(props) {
  const {showAlert} = props;
  return (
    <>
    <div>
      <Contect/>
    </div>
    <div className={`text-${props.mode === "light" ? "dark" : "light"}`}>
      <Notes showAlert={showAlert}  />
      
    <div className="container-fuild">
      
      <div
    className={`d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary bg-${props.mode === "light" ? "primary" : "dark"} text-${props.mode === "light" ? "dark" : "light"} `}>
    {/* <!-- Copyright --> */}
    <div className="text-white mb-3 mb-md-0">
      Copyright © 2022. All rights reserved.
    </div>
    {/* <!-- Copyright --> */}

    {/* <!-- Right --> */}
    <div>
      <Link to="#!" className="text-white me-4">
        <i className="fab fa-facebook-f"></i>
      </Link>
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
  </div>
      
    </div>
    </div>
    </>
  );
}

export default Getnews;
