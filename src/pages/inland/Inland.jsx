import React,{ useCallback } from 'react'
import CommonList from '@/CommonList'
import { ContainerWrap } from 'styles/CommonList'
import { Route } from 'react-router-dom'
import NavHead from '@/navHead'
import Nav from '@/Nav/Nav'
const Inland =function(){

  let MyNav = useCallback(<Nav></Nav>,[])
    return (
      <ContainerWrap>
      <NavHead></NavHead>
        {MyNav}
        <Route
          path="/Inland"
          component={CommonList}
        />
      </ContainerWrap>
    )
  
}

export default Inland