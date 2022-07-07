import React from "react";
import './firstStyle.css'
export default class First extends React.Component {
 
  render() {
    return (
    
        
      <div className=" row bg py-5  ">
{/* <img className="row" src={require.('./../img/1.jpg')} alt="First" />  */}
<div className="col-6   my-5 p-5 d-flex flex-column text-center " style={{color:"white"}}>
    <h1 className="mx-5 my-2 ">Kite Reed</h1>
    <h3 className="mx-5 my-3">Web Developer and Designer</h3>
    <button className="btn btn-outline-light my-3 " > Contact me </button>



    </div>  
    <div className="col-6"> </div>

      </div>
    
    );
  }
}

  
