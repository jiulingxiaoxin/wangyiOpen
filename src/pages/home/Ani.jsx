import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

class Ani extends Component{
  state={
    show:false
  }
  handleClick = ()=>{
    this.setState({
      show:!this.state.show
    })
  }
  render(){
    return (
      <>
        <CSSTransition
          in={this.state.show}
          timeout={2000}
          classNames="my-node"
        >
          <div>lalala

          <button onClick={this.handleClick}>click</button>
          </div>
        </CSSTransition>
      </>
    )
  }
}

export default Ani