import React from "react";
import './About.css'
export default class About extends React.Component {
 
  render() {
    return (
      <>
        
      <div className="row ">
<div className="col-4 p-5" >   
<h1 class="display-1">About Me</h1>

 </div>  
<div className="col-8 p-5 " >

<h3 className=' my-5' >Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities.
     For more complex implementations, custom CSS may be necessary.</h3>
   <a href='index.html' className="btn btn-outline-secondary my-3" download> Download </a>

    </div>  

      </div>
      </>
    );
  }
} 
 