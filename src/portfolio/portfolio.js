import React from "react";
import './portfolio.css'
import Carts from'../Carts/carts';
export default class Portfolio extends React.Component {
 
    constructor() {
        super();    
        this.state = {
        name: "",
        bgColor: ""
        };}

    render() {
    return (
    <>

    <h1 class="display-2">Portfolio</h1>
<div className="row">

<>
<Carts name="Web Design" style={{backgroundColor:"rgb(84, 148, 148)"}}/>
<Carts name="Mobile Design" style={{backgroundColor:"rgb(202, 222, 222)"}}/>
<Carts name="Logo Design" style={{backgroundColor:"rgb(84, 148, 148)"}}/>
<Carts name="Web Appliction Development"  style={{backgroundColor:"rgb(202, 222, 222)"}}/>
<Carts name="PWA Development" style={{backgroundColor:"rgb(84, 148, 148)"}}/>
<Carts name="Web Appliction Development"  style={{backgroundColor:"rgb(202, 222, 222)"}}/>
</>


    </div>
    </>
    );
    }
}