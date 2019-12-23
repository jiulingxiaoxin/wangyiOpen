import React from 'react'
import CommonList from '@/CommonList'
import { ContainerWrap } from 'styles/CommonList'
import { Route } from 'react-router-dom'


const International = function(props){
  
  // let MyNav = useCallback(<Nav></Nav>,[])

    return (
      <ContainerWrap>
      
        <Route
          path="/international"
          component={CommonList}
        />
      </ContainerWrap>
      )
  
}

export default International