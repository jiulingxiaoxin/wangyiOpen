import React, { Component } from 'react'

import { Route, Switch, NavLink} from 'react-router-dom'

import { HomeMain } from './index'
import International from 'pages/international/International'
import ExcellentCourse from 'pages/excellentCourse/ExcellentCourse'
import Detail from 'pages/detail/detail'
import My from 'pages/my/My'
class Layout extends Component{
  render(){
    return (
      <>
        <NavLink to="/my">my</NavLink>
        <Switch>
          <Route 
            exact
            path="/"
            component={HomeMain}
          />
          
          <Route 
            exact
            path="/international"
            component={International}
          />
          <Route 
            path="/detail"
            component={Detail}
          />
          <Route
            path="/my"
            component={My}
          />
        </Switch>
        <Route
            path="/excellentCourse"
            component={ExcellentCourse}
        />
      </>
    )
  }
}

export default Layout