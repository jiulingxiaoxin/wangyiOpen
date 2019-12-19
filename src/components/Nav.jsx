import React, { Component } from 'react'
import { NavWrap } from 'styles/styleOpen'
import { NavLink } from 'react-router-dom'

class Nav extends Component{
  render(){
    return (
      <NavWrap width="0 0 1px 0">
        <div className="nav-box">
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
        <span className="iconfont">&#xe641;</span>
      </NavWrap>

    )
  }
}

export default Nav