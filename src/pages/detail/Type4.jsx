import React from 'react'
import { Type4Wrap } from 'styles/type4'
const img = require('assets/images/head.png')
const Type4 = function(props){
  
  return(
    <>
      <Type4Wrap>
        <img src={img} alt=""/>
        <div className="back"></div>
        <script src={props.pageUrl}></script>
      </Type4Wrap>
    </>
  )
}
export default Type4