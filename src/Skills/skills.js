import React from "react";
import './Skills.css'
import Prog from'../Progress/progress';
export default class Skills extends React.Component {
 
    constructor() {
        super();    
        this.state = {
          name: "html",
          number: 100
        };}

  render() {
    return (
      <>
         
    <div className="row  bgskill">
<div className="col-12 p-5 text-center" >   
<h1 class="display-2">Skills</h1>
<p className=" p-4 m-4">Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities.
     For more complex implementations, custom CSS may be necessary.sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities.
     For more complex implementations, custom CSS may be necessary.</p>
 </div> </div>   
 <div className="row bgskill">
<div className="col-6 p-5 text-center" >   
<h2 className="my-2">My Focus</h2>
<hr style={{color:'white', width:"200px", marginLeft:"230px"}} />
<h3 className="my-4">UI UX Desgin</h3>
<h3 className="my-4">Responsive Desgin</h3>
<h3 className="my-4">Web Desgin</h3>
<h3 className="my-4">Mobile App Desgin</h3>

 </div> 
 <div className="col-6 p-5 text-center" >  
 
<Prog name="html"number="78" color="blue"/>
<Prog name="css"number="90" color="blue"/>
<Prog name="bootstrap"number="80" color="yellow"/>
<Prog name="js"number="55" color="blue"/>
<Prog name="js"number="55" color="red"/>




     </div> 
  </div>
  </>
    );
  }
}