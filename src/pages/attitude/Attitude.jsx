import React, { Component } from 'react'
import CommonList from '@/CommonList'
import { ContainerWrap } from 'styles/CommonList'
import { Route } from 'react-router-dom'
import NavHead from '@/navHead'
import Nav from '@/Nav/Nav'
 

class Attitude extends Component{
  render(){
    return (
      <ContainerWrap>
      <NavHead></NavHead>
        <Nav></Nav>
        <Route
          path="/attitude"
          component={CommonList}
        />
      </ContainerWrap>
    )
  }
}

export default Attitude