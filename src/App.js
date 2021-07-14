import React, { Component } from 'react'
import './App.css';
import Count from './Components/Count';





export class App extends Component {
  state={
    isShow:false
  }
  handleClick=(()=>{
    this.setState({isShow: !this.state.isShow})
  })
  
  render() {
    return (
      <div style ={{ textAlign:"center"}}>
                <button onClick={this.handleClick}>{this.state.isShow ? 'close':'Show'}</button>
         {this.state.isShow ? <Count/> : <h3 style={{color:"gray"}}>Show my profile</h3>}
         
      </div>
    )
  }
}

export default App
