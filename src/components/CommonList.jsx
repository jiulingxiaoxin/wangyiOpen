import React, { Component } from 'react'
import { ListWrap  } from 'styles/CommonList'
import { get } from 'utils/http'
import { formatView } from 'utils/myFuns'
import { NavLink } from 'react-router-dom'
import BScroll from 'better-scroll'
import _ from 'lodash'
import { Route } from 'react-router-dom'
import Detail from 'pages/detail/detail'


class CommonList extends Component{
  state={
    obj : {
      '/international':10,
    },
    list:[],
    count:0,
  }
  bsroll=null
  satrY=0
  scroll= async ()=>{
      let result = await get({
        url:`/open/mob/movie/classify/playlist.do?id=${this.state.obj[this.props.location.pathname]}&type=5&cursor=${this.state.count+10}&pagesize=10`
      })
      
      this.setState({
        list:[...this.state.list,...result.data.data],
        count:this.state.count+10
      })
      
      console.log(0)
  }

  async componentDidMount(){ 
    
    let result = await get({
      url:`/open/mob/movie/classify/playlist.do?id=${this.state.obj[this.props.location.pathname]}&type=5&cursor=0&pagesize=10`
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
    
    console.log(1)
  }

  componentDidUpdate(){
    setTimeout(()=>{
      this.bscroll.refresh()
      this.bscroll.finishPullUp()
    },0) 
  }

  render(){
    console.log(this.props)
    return (
      <div style={{height:'574px',overflow:'hidden'}}  className="scrollbox">
        <ListWrap>
          {
            !this.state.list.length
            ?<div className="loading-wrap">
              <span className="loading" style={{fontFamily:'iconfont'}}>&#xe6a6;</span>
            </div>
            :this.state.list.map(value =>{
              return(
                <li className="list-item" key={value.plid + _.random(0,999999)}>
                  <NavLink
                    to={"/detail#"+value.plid}   
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
                  </NavLink>                 
                </li>
              )
            })
          }
          
        </ListWrap>
        <Route
          path="/detail"
          component={Detail}
        />
      </div>
    )
  }
}

export default CommonList