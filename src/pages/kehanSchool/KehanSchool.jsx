import React from 'react'
import CommonList from '@/CommonList'
import { ContainerWrap } from 'styles/CommonList'
import { Route } from 'react-router-dom'
// import NavHead from '@/navHead'
// import Nav from '@/Nav/Nav'

const KehanSchool = function(props){
  
  // let MyNav = useCallback(<Nav></Nav>,[])

    return (
      <ContainerWrap>
      
        <Route
          path="/kehanSchool"
          component={CommonList}
        />
      </ContainerWrap>
      )
  
}

export default KehanSchool