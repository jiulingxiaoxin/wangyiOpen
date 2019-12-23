import React from 'react'
import CommonList from '@/CommonList'
import { ContainerWrap } from 'styles/CommonList'
import { Route } from 'react-router-dom'

const Ted = function(){

    return (
      <ContainerWrap>
        <Route
          path="/ted"
          component={CommonList}
        />
      </ContainerWrap>
    )
}

export default Ted