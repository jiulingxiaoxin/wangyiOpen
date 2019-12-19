import React, { Component } from 'react'
import {HeadWrap} from 'styles/styleOpen'
import open_logo from 'assets/images/open_logo.png'

class NavHead extends Component {
  render() {
    return (
      <HeadWrap>    
        <img src={open_logo} alt=""/>
        <span className="iconfont" style={{color:'#fff',fontSize:'.25rem'}}>&#xe657;</span>  
      </HeadWrap>
      );
  }
}

export default NavHead