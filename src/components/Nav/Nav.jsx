import React, { PureComponent } from 'react'
import { NavWrap } from 'styles/styleOpen'
import { NavLink, withRouter } from 'react-router-dom'
import BScroll from 'better-scroll'
import { READYCHANGEPOS } from './action_types'
import { connect } from 'react-redux'

const mapState = state =>{
  return {
    posX : state.posX
  }
}

const mapdispatch = dispatch =>({
  rememberPos(){
    dispatch({
      type:READYCHANGEPOS
    })
  }
})

@connect(mapState,mapdispatch)
class Nav extends PureComponent{
  state = {
    bscroll:null
  }
  componentDidMount(){
    
    this.setState({
      bscroll : new BScroll('.nav-box',{
        click:true,
        scrollX:true
      })
    })  
  }

  componentWillUnmount(){
    console.log(this.state.bscroll.x)
  }
  
  render(){
     
    return (
      <NavWrap width="0 0 1px 0" style={this.props.isSticky ? {position:'fixed',left: 0,top: 0,zIndex: 10} : null }>
        <div className="nav-box" >
            <div>
            <NavLink 
              exact
              to={{pathname:'/'}}
              activeClassName="active"
              >首页</NavLink>
            <NavLink 
              to={{pathname:'/excellentCourse',state:{type:2}}}
              activeClassName="active"
            >精品课程</NavLink>
            <NavLink 
              to={{ pathname: '/ted' }}
              activeClassName="active"
            >TED</NavLink>
            <NavLink 
              to={{pathname: '/international'}}
              activeClassName="active"
            >国际名校</NavLink>
            <NavLink 
              to={{pathname: '/inland'}}
              activeClassName="active"
            >国内名校</NavLink>
            <NavLink 
              to={{pathname: '/speach'}}
              activeClassName="active"
            >演讲</NavLink>
            <NavLink 
              to={{pathname: '/kehanSchool'}}
              activeClassName="active"
            >可汗学院</NavLink>
            <NavLink 
              to={{pathname: '/light'}}
              activeClassName="active"
            >灯下尘</NavLink>
            <NavLink 
              to={{ pathname: '/funClass' }}
              activeClassName="active"
            >趣味学堂</NavLink>
            <NavLink 
              to={{pathname: '/changeForYou'}}
              activeClassName="active"
            >课随你变</NavLink>
            <NavLink 
              to={{pathname: '/share'}}
              activeClassName="active"
            >知识共享</NavLink>
            <NavLink 
              to={{pathname: '/attitude'}}
              activeClassName="active"
            >态度公开课</NavLink>
            
                
            </div>
          
        </div>
        <span className="iconfont">&#xe641;</span>
      </NavWrap>

    )
  }
}

export default withRouter(Nav)