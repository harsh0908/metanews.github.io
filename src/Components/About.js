import { Link } from "react-router-dom"
function About(props) {
   return (
    <div className={`text-${props.mode === "light" ? "dark" : "light"}`}>
    <div>
   <section className="">
  <div className="container-fuild">
  <div class={`bg-${props.mode === "light" ? "white" : "black"}`}>
  <div class="container">
  <h3 className={`text-center  card shadow-lg p-3 mb-5 text-dark  bg--${props.mode === "light" ? "dark" : "light"}`}>
        About - MetaNews
      </h3> 
    <div class="row h-100 align-items-center ">
      <div class="col-lg-6">
        {/* <h1 class="display-4">About us </h1> */}
        {/* <h3 className={`text-center card shadow-lg p-3 mb-5 text-dark  bg--${props.mode === "light" ? "dark" : "light"}`}>
        About - MetaNews
      </h3> */}
         <div className="mx-2 my-2"> MetaNews - News sites include sites that have a large variety of information may include science,entertainment, sports, news that may not be current but is interesting
     <div className=" ">
     <h5 className=" my-2">NEWS WILL BE SHOW ACCURANCY  AND FAST</h5>
        <h6 className="mx-2 my-3" > <b> --Our News Category-- </b></h6>
        <p className="px-5">
        -General <br />
        -Business <br />
        -Entertainment <br />
        -Health <br />
        -Science <br />
        -Sports <br />
        -Technology <br />
        </p>
        </div>
        <h6>We are providing free service of news from last 3 years</h6>
       </div>
      </div>

      <div class="col-lg-6 d-none pb-4 d-lg-block"><img  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="" class="img-fluid"/></div>
    </div>
  </div>
</div>
</div>
  {/* <div className="container h-custom">
  <h3 className={`text-center card shadow-lg p-3 mb-5 text-dark  bg-light`}>
        About - MetaNews
      </h3>
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5"> */}
               {/* eslint-disable-next-line  */}
        {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt='my photo' /> 
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1"> */}
        {/* <h1 className="">About - MetaNews</h1> */}
       
     {/* <div className="mx-2 my-4"> MetaNews - News sites include sites that have a large variety of information may include science,entertainment, sports, news that may not be current but is interesting
     <div className=" ">
     <h5 className=" my-2">NEWS WILL BE SHOW ACCURANCY  AND FAST</h5>
        <h6 className="mx-2 my-3" > <b> --Our News Category-- </b></h6>
        <p className="px-5">
        -General <br />
        -Business <br />
        -Entertainment <br />
        -Health <br />
        -Science <br />
        -Sports <br />
        -Technology <br />
        </p>
        </div>
        <h6>We are providing free service of news from last 3 years</h6>
       </div>
      </div>    
    </div>
  </div> */}

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
 </section>
   </div>
    </div>
    
  )
}

export default About
