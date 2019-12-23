import React, { PureComponent } from 'react'
import NavHead from '@/navHead'
import Nav from '@/Nav/Nav'
import Poster from '@/Poster'
import { formatTime } from 'utils/myFuns'
import { connect } from 'react-redux'
import { GETLIST } from './action_types'

const mapState = state =>{
  return {
    list:state.getIn(['home','list'])
  }
}

const mapdispatch = dispatch =>({
  loadData(){
    dispatch({ //假的dispatch，只是触发了store里的sagas.js里的takeEvery函数去派发真正的action
      type:GETLIST
    })
  }
})

class HomMain extends PureComponent{
  state={
    data:[],
    isSticky : false
  }
  // let isSticky = false
  componentDidMount(){

     //触发了mapdispatch的loadData,派发了action
    // console.log(this.props.list)

    
    // this.setState({
    //   data:this.props.list.data.data
    // })
    window.onscroll = this.scroll
    this.props.loadData()
    }

    scroll = ()=>{
      if(window.pageYOffset > 49){
        this.setState({
          isSticky : true
        })
      }
      else{
        this.setState({
          isSticky : false
        })
      } 
    }
    
    /* const { loadData } = props
    useEffect(()=>{
      loadData()
      
    },[loadData])
 */
    

    render(){

      return (
        <>
          <NavHead isSticky={this.state.isSticky}></NavHead>
          <Nav isSticky={this.state.isSticky}></Nav>
                  
            {     
                this.props.list.map((value)=>{
                return (
                  <div key={value.subId}>
                    <Poster img={value.image} quantity={value.quantity} viewCount={value.viewCount}>
                      <h3>{formatTime(value.publishTime)}</h3>
                      <h4>{value.contentTitle}</h4>
                      <h5>{value.contentDesc}</h5>
                    </Poster>
                  </div>
                )
            })
            }
          
        </>
      ) 
    }
}

export default connect(mapState,mapdispatch)(HomMain)