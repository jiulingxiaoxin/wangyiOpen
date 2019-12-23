import React, { Component } from 'react'
import CommonList from '@/CommonList'
import { ContainerWrap } from 'styles/CommonList'
import { Route } from 'react-router-dom'
import NavHead from '@/navHead'
import Nav from '@/Nav/Nav'

class ChangeForYou extends Component{
  render(){
    return (
      <ContainerWrap>
      <NavHead></NavHead>
        <Nav></Nav>
        <Route
          path="/changeForYou"
          component={CommonList}
        />
      </ContainerWrap>
    )
  }
}

export default ChangeForYou