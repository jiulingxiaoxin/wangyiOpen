import React, { Component } from 'react'
import Type4 from './Type4'

class Detali2 extends Component{
  state = {
    data:null
  }

  render(){
    return (
      <Type4
      pageUrl={this.props.location.state.pageurl}
      ></Type4>
    )
  }
}

export default Detali2