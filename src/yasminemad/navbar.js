//class component
import React from 'react';
export default  class Navbar extends React.Component
{   

constructor(){
    super();
    console.log("ff)");

    this.state={
        name:'tasnime',
        age:12

    }

}
 componentDidMount(){   
    this.setState({name:'Tai', age:12});
 }


render(){
    //ay 7aga 3yzinha t ruten w n4ofha n7tha hna lzm 34n tzhr 

    return <><h1>hello from tasnime</h1>
    <h2>hello from {this.state.name}</h2>

    </>;
}
}