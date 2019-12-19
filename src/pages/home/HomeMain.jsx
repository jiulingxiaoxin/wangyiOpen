import React, { Component } from 'react'
import { HomeMainWrap } from 'styles/styleOpen'
import NavHead from '@/navHead'
import Nav from '@/Nav'
import { formatView , formatTime } from 'utils/myFuns'
import { connect } from 'react-redux'
import { GETLIST } from './action_types'

const mapState = state =>{
  return {
    list:state.home.list
  }
}

const mapdispatch = dispatch =>({
  loadData(){
    dispatch({ //假的dispatch，只是触发了store里的sagas.js里的takeEvery函数去派发真正的action
      type:GETLIST
    })
  }
})

class HomMain extends Component {
  state={
    data:[]
  }

  componentDidMount(){

     //触发了mapdispatch的loadData,派发了action
    // console.log(this.props.list)

    
    // this.setState({
    //   data:this.props.list.data.data
    // })
    
    this.props.loadData()
  }

  render() {
    let time
    let view = 0
    console.log(this.props.list)
    return (
      <>
        <NavHead></NavHead>
        <Nav></Nav>
        <HomeMainWrap>
          
          {
            
            this.props.list.map((value,index)=>{
              time = formatTime(value.publishTime)
              view = formatView(value.viewCount)
              return (
                <div key={value.subId}>
                  <div className="home-main-wrap">
                    <img src={value.image} alt="" />
                    <div className="home-vedio-time">
                      <span>{value.quantity}</span>
                    </div>
                  </div>
                  <div className="summarize" width="0 0 1px 0" color="#000">
                    <h3>{time}</h3>
                    <h4>{value.contentTitle}</h4>
                    <h5>{value.contentDesc}</h5>
                    <div className="share-wrap">
                      {view}人观看<span style={{fontFamily:'iconfont',fontSize:'.25rem',color:'#4a4a4a'}}>&#xe637;</span>
                    </div>
                  </div>
                </div>
              )
            
          })
          }
        </HomeMainWrap>
      </>
    )
  }

  
}

export default connect(mapState,mapdispatch)(HomMain)