import React , { Component } from 'react'
import open_logo from 'assets/images/open_logo2.png'
import { READYCHANGETYPE} from 'pages/excellentCourse/action_types'
import { connect } from 'react-redux'
import { formatPrice , formatView } from 'utils/myFuns'

const mapState = state =>{
  return {
    list:state.exce.list
  }
}

const mapDispatch = dispatch =>{
  return{
    CHANGETYPE(){
      dispatch({
        type:READYCHANGETYPE,
        data:this.type
      })
    }
  }
}

class VIPList extends Component {
  state={
    data:this.props.location.state.data,
    type:this.props.location.state.type
  }
   getData=async ()=>{

    
    
    /* this.setState({
      data:res.data.data
    }) */
  }

  componentDidMount(){
    // this.getData()
  }

  /* componentDidUpdate(){
    this.getData()
  } */

render(){
    // this.props.CHANGETYPE()
    // console.log(this.state.type)
    let data = this.props.location.state.data
    return (
    <>
      {
        data
        ?<div>
          <img src={data[0].imageHorizontalUrl} alt=""/>
        <h2 className="title" >{data[0].title}</h2>
        <h3 className="payInfo">
          <span>
            ￥{formatPrice(data[0].couponInfo.finalPrice)}
            <span>￥{formatPrice(data[0].originPrice)}</span>
          </span>
            {formatView(data[0].interestCount)}万人感兴趣
        </h3>
        <ul className="list-wrap">
          {
            data.map((value,index)=>{
              if(index){
                return (
                  <li key={value + index}>
                    <div className="img-wrp">
                      <img src={value.imageHorizontalUrl} alt=""/>
                      {
                        value.couponInfo!==null
                        ?<div className="discount">限量优惠</div>
                        :null
                      }
                      <div className="count">共{value.contentCount}集</div>
                    </div>
                    <h3 className="about">{value.title}</h3>
                    <h3 className="payInfo">
                      <span>
                        ￥{formatPrice(value.originPrice)}
                        <span>{value.couponInfo!==null?'￥'+formatPrice(value.couponInfo.finalPrice):null}</span>
                      </span>
                      {formatView(value.interestCount)}人感兴趣
                    </h3>
                  </li>
                )
              }
              return null
            })
          }
          
        </ul>
        </div>
        :null
      }
    </>
    )
  }
}

export default connect(mapState,mapDispatch)(VIPList)