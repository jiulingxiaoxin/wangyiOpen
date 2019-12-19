import React, { Component } from 'react'

class RenderProp extends Component{
  render(){
    return (
      <>
        {
          this.props.render(2000)
        }
      </>
    )
  }
}

export default RenderProp