import React, { Component } from 'react'
import {HeadWrap} from 'styles/styleOpen'
import open_logo from 'assets/images/open_logo.png'
import {withRouter} from 'react-router-dom'

class NavHead extends Component {
  goBack = ()=>{
    this.props.history.push('/')
  }
  render() {
    return (
      <HeadWrap style={this.props.isSticky ? {marginBottom:'49px'} : null }>    
        <img src={open_logo} alt="" onClick={this.goBack}/>
        <span className="iconfont" style={{color:'#fff',fontSize:'.25rem'}}>&#xe657;</span>  
      </HeadWrap>
      );
  }
}

export default withRouter(NavHead)