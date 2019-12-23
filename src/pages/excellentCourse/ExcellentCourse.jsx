import React, { Component } from 'react'
import { HeadWrap, Mainwrap } from 'styles/excellentCourse'
import open_logo from 'assets/images/open_logo2.png'
import { Route,Switch } from 'react-router-dom'
import VIPList from '@/VIPList'
import { get } from 'utils/http'
// import { CSSTransition } from 'react-transition-group'
import 'assets/styles/animation.css'

class ExcellentCourse extends Component{
  state={
    data:[],
    isActive:0,
    type:2,
    spanlist:[
      {url:'/audio',text:'音频',type:2},
      {url:'/vedio',text:'视频',type:1}
    ]
  }
  

  async getData(type){
    let res = await get({
      url:`/vip/open/trade/mob/course/items.do?cursor=0&pagesize=21&contentType=${type}`
    })
    return res
  }

  handleClick=()=>{
    this.props.history.push({pathname:'/'})
    
    // console.log( this.props.history)
  }

  handleSkip= async (index)=>{
    let res = await this.getData(this.state.spanlist[index].type)
    this.setState({
      isActive:index,
      data:res.data.data,
      type:index+1
    })
    this.props.history.push({
      pathname:this.props.match.url + this.state.spanlist[index].url,
      state:{type:this.state.spanlist[index].type,data:this.state.data}
    })
  }

  async componentDidMount(){
    let res = await this.getData(2)
    console.log(res)
    this.setState({
      data:res.data.data
    })
    this.props.history.push({
      pathname:this.props.match.url + '/audio',
      state:{type:2,data:this.state.data}
    })
  }

  render(){
    return (
      <>
        <HeadWrap>
          <header>
            <div className="top-wrap">
              <div className="back" onClick={this.handleClick}>
                <img src={open_logo} alt=""/>
                <span style={{fontFamily:'iconfont',fontSize:'.16rem',color:'#fff',marginLeft:'5px'}}>&#xe681;</span>
              </div>
              <div className="my">
                我的
                <span style={{fontFamily:'iconfont',fontSize:'.1rem',color:'#fff',marginLeft:'5px'}}>&#xe641;</span>
              </div>
            </div>
            <nav>
             {/*  <span 
                to={{
                  pathname:this.props.match.url + ',
                  state:{type:2}
                }}
                activeClassName="active"
                // className={this.state.isActive?'active':null}
                >
                音频
              </span>
              <span
                to={{
                  pathname:this.props.match.url + ,
                  state:{type:1}
                }}
                activeClassName="active"
              >
                <div>视频</div>
              </span> */}
              {
                this.state.spanlist.map((value,index)=>{
                  return(
                    <span 
                      onClick={()=>{
                        this.handleSkip(index)
                      }}
                      key={value+index}
                      className={index===this.state.isActive?'active':null}
                    >{value.text}</span>
                  )
                })
              }
            </nav>
          </header>
        </HeadWrap>
        <Mainwrap>
          
          
            {/* <CSSTransition></CSSTransition> */}
            {/* <CSSTransition
              in={this.state.type === 2 ? true : false}
              timeout={1000}
              classNames={{
                enter:'animated',
                enterActive:'slideInLeft',
                exit:'animated',
                exitActive:'slideOutnRight'
              }}
              mountOnEnter
              unMountOnExit
            > */}
            <Switch>
              <Route 
                path={this.props.match.url + '/audio'}
                component={VIPList}
                /* children={()=>{
                  return <VIPList {...this.state}></VIPList>
                }} */
              />
            {/* </CSSTransition> */}
            <Route 
              path={this.props.match.url}
              component={VIPList}
            />
            {/* <CSSTransition
              in={this.state.type === 1 ? true : false}
              timeout={1000}
              classNames={{
                enter:'animated',
                enterActive:'sildeInRight',
                exit:'animated',
                exitActive:'sideOutLeft'
              }}
              mountOnEnter
              unMountOnExit
            > */}
              <Route     
                path={this.props.match.url + '/vedio'}
                component={VIPList}
                /* children={()=>{
                  return <VIPList {...this.state}></VIPList>
                }} */
              />
            {/* </CSSTransition> */}
            </Switch>
        </Mainwrap>
      </>
    )
  }
}

export default ExcellentCourse