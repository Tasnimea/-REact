import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Footer extends React.Component {

    render() {
    return (
<div className="row bgskill py-5 d-flex justify-content-around " style={{color:"white"}}>

    <div className="col-4 px-2">
        <h3>GET IN TOUCH</h3>
        
       <p><i className="fa-solid fa-envelope"></i> tas@yahoo.com</p> 
       <p><i className="fa-solid fa-envelope"></i> 12540254</p> 

         
    </div>
    <div className="col-4 py-5 d-flex align-self-center  ">
    <button type="button" class="btn btn-outline-light py-2 p-5">Contact Me</button>

    </div>
  

      <div className="col-4 d-flex align-items-end flex-column bd-highlight mb-2 ">
        
       <h3><i className="fa-brands fa-twitter "></i>
       <i className="fa-brands fa-facebook-f px-3"></i>
    <i className="fa-brands fa-linkedin  "></i> 
   </h3> 
   <h3>copywrite@</h3>

         
    </div>

    </div> 

    );
    }
}