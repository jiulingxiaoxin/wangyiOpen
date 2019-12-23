import React from 'react'
import CommonList from '@/CommonList'
import { ContainerWrap } from 'styles/CommonList'
import { Route } from 'react-router-dom'

const Inland =function(){

  // let MyNav = useCallback(<Nav></Nav>,[])
    return (
      <ContainerWrap>
      
        <Route
          path="/Inland"
          component={CommonList}
        />
      </ContainerWrap>
    )
  
}

export default Inland