import React from 'react'
import Poster from '@/Poster'
import { formatPlayTime, formatView } from 'utils/myFuns'
import { ContainerWrap, DownLoadWrap, CallAppWrap, ContentWrap, SeeAllWrap, InfoWrap} from 'styles/detail'
import { Player } from 'video-react';
import { withRouter } from 'react-router-dom'
// import v from 'assets/1.mp4'

const Type5 = function(props){
  const ref = React.createRef()
  // console.log(history)
  return(
    <div>
        <Player ref={ref} poster={props.poster}>
          <source src={props.vedioUrl} type='video/mp4'/>
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
          <ContentWrap width="0 0 1px 0" h={props.h}>
            <h2>{props.title}</h2>
            <h3>{props.tags}</h3>
            <p>{props.description}</p>
            <p 
              className="see-move"  
              style={props.h==='auto'?{transform:'rotate(180deg)'}:null}
              onClick={props.onMyClick}
            >&#xe641;</p>
          </ContentWrap>
          <ContainerWrap width="0 0 1px 0" padding="0 .1rem .1rem .1rem">
            <h3 className="class-show">课程目录</h3>
            <ul className="class-list">
              {
                props.videoList.map((value,index)=>{
                  // console.log(this.props.location.state.plid,value.plid)
                  console.log(props.rid)
                  return(
                    <InfoWrap iii={index+1} key={value.mid}>
                    <div key={value.mid} className={props.rid === value.mid ? 'active-info':null}>
                      <div className="info">
                        <p>{value.title}</p>
                        <span>{formatPlayTime(value.mLength,1)}</span>
                      </div>
                    </div>
                    </InfoWrap>
                  )
                })
              }
              
            </ul>
            <SeeAllWrap width="1px" color="#357d4c" border="0.25rem">去公开课App，查看全部课程</SeeAllWrap>
          </ContainerWrap>
          <ContainerWrap width="0 0 1px 0">
            <h3 className="class-show">相关推荐</h3>
            {
              props.recommendList.map((value,index)=>{
                console.log(value)
                return(
                  <Poster 
                    img={value.imgUrl} 
                    quantity={formatPlayTime(value.quantity)} 
                    key={value.playId} 
                    viewCount={formatView(value.viewCount)}
                    mid ={value.targetId}
                    plid={value.playId}
                    type={5}
                    subscribeContentId ={value.playId} 
                  >
                    <h4>{value.title}</h4>
                    <h5>{value.description}</h5>
                  </Poster>
                )
              })
            }
          </ContainerWrap>
    </div>
  )
}
export default withRouter(Type5)