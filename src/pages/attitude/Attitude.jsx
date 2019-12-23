import React, { Component } from 'react'
import CommonList from '@/CommonList'
import { ContainerWrap } from 'styles/CommonList'
import { Route } from 'react-router-dom'

class Attitude extends Component{
  render(){
    return (
      <ContainerWrap>
      
        <Route
          path="/attitude"
          component={CommonList}
        />
      </ContainerWrap>
    )
  }
}

export default Attitude