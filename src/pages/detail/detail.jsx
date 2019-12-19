import React, { Component } from 'react'
import NavHead from '@/navHead'
import { get } from 'utils/http'
import { ContainerWrap, DetailWrap, DownLoadWrap, CallAppWrap, ContentWrap } from 'styles/detail'
import { Player } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";
import v from 'assets/1.mp4'

class DetailRoute extends Component{
  state={
    data:null
  }

  async componentDidMount(){
    let res = await get({
      url:`/open/mob/movie/list.do?plid=${this.props.location.hash.substr(1,)}`
    })
    this.setState({
      data:res.data.data
    })
  }

  render(){
    // console.log(this.state.data.videoList[0].m3u8SdUrlOrign)
    return (
      <>
        <NavHead></NavHead>
        <DetailWrap>
        {
          !this.state.data
          ?''
          :<div>
              <Player ref="player">
                <source src={v}/>
              </Player>
                <DownLoadWrap width="0 0 1px 0">
                  <div className="download">
                    播放5万次
                    <span className="download-box">
                      <span className="iconfont">
                        &#xe627;
                        <span>分享</span>
                      </span>
                      <span className="iconfont">
                        &#xe723;
                        <span>缓存</span>
                      </span>
                    </span>
                  </div>
                </DownLoadWrap>
                <CallAppWrap width="0 0 1px 0">
                  <div className="call-app">
                    <div className="call-app-btn">打开网易公开课APP，提升3倍流畅度！</div>
                  </div>
                </CallAppWrap>
                <ContentWrap width="0 0 1px 0">
                  <h2>创造力</h2>
                  <h3>郭家铭快递费</h3>
                  <p>dsfhjdhfhfkhsdklfhkajhfkjdshfkjdhsfkfhlasdfkjdfh</p>
                  <p className="see-move">&#xe641;</p>
                </ContentWrap>
                <ContainerWrap width="0 0 1px 0">
                  <h3 className="class-show">课程目录</h3>
                  <ul className="class-list">
                    <li>
                      
                      <div className="info">
                        <p>概论</p>
                        <span>2:2:2</span>
                      </div>
                    </li>
                  </ul>
                </ContainerWrap>
          </div>
        }
        </DetailWrap>
      </>
    )
  }
}

export default DetailRoute