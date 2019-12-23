import React from 'react'
import { HomeMainWrap, SummarizeWrap } from 'styles/components'
const Poster = function(props){
  let { img , quantity, viewCount } = props
  return(
    <HomeMainWrap width="0 0 1px 0">
      <div className="home-main-wrap">
        <img src={img} alt="" />
        <div className="home-vedio-time">
          <span>{quantity}</span>
        </div>
      </div>
      <div className="summarize" width="0 0 1px 0" color="#000">
        <div className="summarize-detail">
          <SummarizeWrap width="0 0 1px 0">
            {props.children}
          </SummarizeWrap>
        </div>
        <div className="share-wrap">
          {viewCount}人观看<span style={{fontFamily:'iconfont',fontSize:'.25rem',color:'#4a4a4a'}}>&#xe637;</span>
        </div>
      </div>
      
    </HomeMainWrap>
  )
}

export default Poster