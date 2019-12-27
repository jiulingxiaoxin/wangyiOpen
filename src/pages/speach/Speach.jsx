import React from 'react'

import { ContainerWrap } from 'styles/CommonList'
import { Route } from 'react-router-dom'
// import NavHead from '@/navHead'
// import Nav from '@/Nav/Nav'

const Speach = function(props){
  
  // let MyNav = useCallback(<Nav></Nav>,[])

    return (
      <ContainerWrap>
      {/* <NavHead></NavHead>
        {MyNav} */}
        <Route
          path="/speach"
          component={CommonList}
        />
      </ContainerWrap>
      )
  
}

export default Speach