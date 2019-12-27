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
    path:null
    // plid:this.props.location.hash.substr(1,)
  }

  SeeMove = ()=>{
    this.setState({
      h:this.state.h==='.255rem'?'auto':'.255rem'
    })
  }

  async componentDidMount(){
    let re = /detail\/(([a-z]|[A-Z]|[0-9])*)\//g
    let path
     this.props.history.location.pathname.replace(re,($0,$1)=>{
      this.setState({
        path:$1
      })
    })
    console.log(path)
    let res = await get({
      url:`/open/mob/movie/list.do?plid=${this.props.match.params.plid}`
    })
    let res2 = await get({
      url:`/open/mob/movie/recommend/list.do?targetId=${this.props.match.params.plid}`
    })
    this.setState({
      data:res.data.data,
      recommendList:res2.data.data
    })
    
  }

  render(){
    console.log(this.state.data)
    
    return (
      <>    
          {
            this.props.match.params.type===4
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
                  mid={this.props.match.params.mid}
                  rid={this.state.path}
                  plid={this.props.match.params.plid}
                  recommendList = {this.state.recommendList}
                  onMyClick = {this.SeeMove}
                  vedioUrl = {this.state.data.videoList[0].m3u8SdUrlOrign}
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