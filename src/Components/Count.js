import React, { Component } from "react";

export class Count extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  //state={
  // count:0
  //}

  componentDidMount() {
    setInterval(() => {
      this.increment();
    }, 1000);
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  
  render() {
    return (
      <div>
        <h1 style={{color:"gray"}}>Name:Heni Dammak</h1>
        <h2 style={{color:"gray"}}>Age:22</h2>
        <h3 style={{color:"gray"}}>Profession:Student</h3>
         <img src="heni.jpg" alt="" height="350px" />
         <h1 style={{color:"gray"}}>{this.state.count}</h1>
      </div>
    );
  }
}

export default Count;
