import React, { PureComponent } from 'react'

import { Route, Switch, withRouter } from 'react-router-dom'

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
import Ted from 'pages/ted/Ted'
import Nav from '@/Nav/Nav'
import NavHead from '@/navHead'
// import Ani from './Ani'


class Layout extends PureComponent{
  state={
    data:[],
    isSticky : false
  }

  scroll = ()=>{
    if(window.pageYOffset > 49){
      this.setState({
        isSticky : true
      })
    }
    else{
      this.setState({
        isSticky : false
      })
    } 
  }

  componentDidMount(){
    window.onscroll = this.scroll
  }


  render(){
    let type
    let path = this.props.location.pathname
    if(path.indexOf('/excellentCourse') !== -1 || path.indexOf('/detail2') !== -1){
      type = 1
    }else if(path.indexOf('/detail') !== -1 ){
      type = 2
    }else{
      type = 0
    }
    return (
      <>
        {/* <Ani></Ani> */}
        {
          type === 1? null : type === 2? <NavHead isSticky={this.state.isSticky}></NavHead>: type ? null
          : <>
            <NavHead isSticky={this.state.isSticky}></NavHead>
            <Nav isSticky={this.state.isSticky}></Nav>
          </>
          
          
        }
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
            path="/Ted"
            component={Ted}
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

export default withRouter(Layout)