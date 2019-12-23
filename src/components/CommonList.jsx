import React, { Component } from 'react'
import { ListWrap  } from 'styles/CommonList'
import { get } from 'utils/http'
import { formatView } from 'utils/myFuns'
import { NavLink } from 'react-router-dom'
import BScroll from 'better-scroll'
import _ from 'lodash'


class CommonList extends Component{
  state={
    obj : {
      '/international' : { id : 10, type : 5 },
      '/inland' : { id : 12, type : 5 },
      '/speach' : { id : 5, type : 5 },
      '/kehanSchool' : { id : 13, type : 5 },
      '/light' : { id : 33, type : 4 },
      '/funClass' : { id : 6, type : 4 },
      '/changeForYou' : { id : 1, type : 4 },
      '/share' : { id : 8, type : 4 },
      '/attitude' : { id : 9, type : 4 }
    },
    list:[],
    count:0,
    
  }
  bsroll = null
  satrY = 0
  id = this.state.obj[this.props.location.pathname].id
  type = this.state.obj[this.props.location.pathname].type

  scroll= async ()=>{
      let result = await get({
        url:`/open/mob/movie/classify/playlist.do?id=${this.id}&type=${this.type}&cursor=${this.state.count+10}&pagesize=10`
      })
      
      this.setState({
        list:[...this.state.list,...result.data.data],
        count:this.state.count+10
      })
  }

  async componentDidMount(){ 
    let result = await get({
      url:`/open/mob/movie/classify/playlist.do?id=${this.id}&type=${this.type}&cursor=0&pagesize=10`
    })
    this.setState({
      list:result.data.data,
      count:this.state.count+10
    }) 
    this.bscroll = new BScroll('.scrollbox',{
      click:true,
      scrollY:true,
      pullUpLoad:true,
      startY:0,
      swipeTime:5000,
      momentum:false,
      bounce:false
    })
    this.bscroll.on('pullingUp' , _.debounce(this.scroll),500)
  }

  componentDidUpdate(){
    setTimeout(()=>{
      this.bscroll.refresh()
      this.bscroll.finishPullUp()
    },0) 
  }

  render(){
    return (
      <div style={{flew:1,overflow:'hidden'}}  className="scrollbox">
        <ListWrap>
          {
            !this.state.list.length
            ?<div className="loading-wrap">
              <span className="loading" style={{fontFamily:'iconfont'}}>&#xe6a6;</span>
            </div>
            :this.state.list.map(value =>{
              return(
                <li className="list-item" key={value.plid + _.random(0,999999)}>
                  {
                    this.type === 4
                    ?<a href={value.pageUrl}>  
                      <img src={value.picUrl} alt="" className="img-box" />
                      <div>
                      <h3>{value.title}</h3>
                        <p>
                          {value.quantity ? value.quantity+' |' : null}
                          <span> {formatView(value.viewcount)}</span>人观看
                        </p>
                      </div>
                    </a>
                    :<NavLink
                    to={
                      
                      {
                        pathname: "/detail",
                        state:{mid : value.rid,plid:value.plid,type:this.type}  
                      }
                    }
                  >
                    <div className="img-box">
                      <div className="img-wrap wrap-top">
                        <img src={value.picUrl} alt=""/>
                      </div>
                      <div className="img-wrap wrap-m">
                        <img src={value.picUrl} alt=""/>
                      </div>
                      <div className="img-wrap wrap-b">
                        <img src={value.picUrl} alt=""/>
                      </div>
                    </div>
                    <div>
                    <h3>{value.title}</h3>
                      <p>
                        {value.quantity} |
                        <span> {formatView(value.viewcount)}</span>人观看
                      </p>
                    </div>
                  </NavLink> }                
                </li>
              )
            })
          }
          
        
        </ListWrap>
      </div>
    )
  }
}

export default CommonList