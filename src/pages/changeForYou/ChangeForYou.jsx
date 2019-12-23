import React, { Component } from 'react'
import CommonList from '@/CommonList'
import { ContainerWrap } from 'styles/CommonList'
import { Route } from 'react-router-dom'


class ChangeForYou extends Component{
  render(){
    return (
      <ContainerWrap>
        <Route
          path="/changeForYou"
          component={CommonList}
        />
      </ContainerWrap>
    )
  }
}

export default ChangeForYou