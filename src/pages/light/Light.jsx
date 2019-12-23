import React, { useCallback } from 'react'
import CommonList from '@/CommonList'
import { ContainerWrap } from 'styles/CommonList'
import { Route } from 'react-router-dom'
import NavHead from '@/navHead'
import Nav from '@/Nav/Nav'

const Light = function(props){
  
  let MyNav = useCallback(<Nav></Nav>,[])

    return (
      <ContainerWrap>
      <NavHead></NavHead>
        {MyNav}
        <Route
          path="/light"
          component={CommonList}
        />
      </ContainerWrap>
      )
  
}

export default Light