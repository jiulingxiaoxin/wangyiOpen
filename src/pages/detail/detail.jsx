import React, { Component } from 'react'
import Type5 from './Type5'
import Type4 from './Type4'
import { get } from 'utils/http'
import { DetailWrap } from 'styles/detail'
import "../../../node_modules/video-react/dist/video-react.css";

class DetailRoute extends Component{
  state={
    data:null,
    recommendList:null,
    h:'.255rem',
    // plid:this.props.location.hash.substr(1,)
  }

  SeeMove = ()=>{
    this.setState({
      h:this.state.h==='.255rem'?'auto':'.255rem'
    })
  }

  async componentDidMount(){
    let res = await get({
      url:`/open/mob/movie/list.do?plid=${this.props.location.state.plid}`
    })
    let res2 = await get({
      url:`/open/mob/movie/recommend/list.do?targetId=${this.props.location.state.plid}`
    })
    this.setState({
      data:res.data.data,
      recommendList:res2.data.data
    })
  }

  render(){
    return (
      <>    
          {
            this.props.location.state.type===4
            ?<Type4></Type4>
            :!this.state.data
            ?''
            :<>
              
              <DetailWrap>
                <Type5
                  h={this.state.h}
                  title={this.state.data.title}
                  tags={this.state.data.tags}
                  description={this.state.data.description}
                  videoList={this.state.data.videoList}
                  mid={this.props.location.state.mid}
                  recommendList = {this.state.recommendList}
                  onMyClick = {this.SeeMove}
                  vedioUrl = {this.state.data.m3u8SdUrlOrign}
                  poster = {`https://nimg.ws.126.net/?url=${encodeURIComponent(this.state.data.imgPath)}&thumbnail=100000x100000&quality=100&type=webp`}
                ></Type5>
              </DetailWrap>
            </>
          }
          
              

      </>
    )
  }
}

export default DetailRoute