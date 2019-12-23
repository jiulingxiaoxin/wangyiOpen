import React, { Component } from 'react'

import { Route, Switch} from 'react-router-dom'

import { HomeMain } from './index'
import International from 'pages/international/International'
import ExcellentCourse from 'pages/excellentCourse/ExcellentCourse'
import Detail from 'pages/detail/detail'
import Detail2 from 'pages/detail/detail2'
import Inland from 'pages/inland/Inland'
import Speach from 'pages/speach/Speach'
import KehanSchool from 'pages/kehanSchool/KehanSchool'
import Light from 'pages/light/Light'
import FunClass from 'pages/funClass/FunClass'
import ChangeForYou from 'pages/changeForYou/ChangeForYou'
import Share from 'pages/share/Share'
import Attitude from 'pages/attitude/Attitude'

class Layout extends Component{
  render(){
    return (
      <>
        <Switch>
          <Route 
            exact
            path="/"
            component={HomeMain}
          />
          <Route 
            path="/detail"
            component={Detail}
          />
          <Route
            path="/detail2"
            component={Detail2}
          />
          <Route    
            path="/international"
            component={International}
          />
          <Route
            path="/Inland"
            component={Inland}
          />
          <Route
            path="/speach"
            component={Speach}
          />
          <Route
            path="/funClass"
            component={FunClass}
          />
        </Switch>
        <Route
            path="/excellentCourse"
            component={ExcellentCourse}
        />
        <Route
          path="/kehanSchool"
          component={KehanSchool}
        />
        <Route
          path="/light"
          component={Light}
        />
        <Route
          path="/changeForYou"
          component={ChangeForYou}
        />
        <Route
          path="/share"
          component={Share}
        />
        <Route
          path="/attitude"
          component={Attitude}
        />
      </>
    )
  }
}

export default Layout