import React from "react";
import './home.css'


export default class Home extends React.Component {
    constructor() {
        super();
        console.log("from constructor"); //1
    
        
      }

      render() {
        console.log("from Render"); //2
        return (
          <div className="home vh-100 ">
            <div className="det p-4 text-white ">
            <h1 className="py-1">Yasmin Essam</h1>
           <h4 className="py-1">web developer & Dseigner</h4>
           <button className="  btn btn-dark py-1">Contact Me</button>
            </div>
       
          </div>
        );
      }
    }    
