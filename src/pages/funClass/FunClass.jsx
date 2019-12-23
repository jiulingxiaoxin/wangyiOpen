import React, { Component } from 'react'
import CommonList from '@/CommonList'
import { ContainerWrap } from 'styles/CommonList'
import { Route } from 'react-router-dom'


class FunClass extends Component{
  render(){
    return (
      <ContainerWrap>
      
        <Route
          path="/funClass"
          component={CommonList}
        />
      </ContainerWrap>
    )
  }
}

export default FunClass