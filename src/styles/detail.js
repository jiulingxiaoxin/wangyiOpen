import styled from 'styled-components'
import border from 'assets/styles/border'

const ContainerWrap = border(styled.div`
padding:0 15px;
.class-show{
height:.56rem;
font-size:.17rem;
font-weight: normal;
text-align: center;
line-height:.56rem;
}
.class-list{
  li{
    position:relative;
    height:55px;
    background: #f1f1f1;
    padding:0 40px 0 30px;
    display: flex;
    flex-direction:column;
    
    &:after{
      content:'';
      position:absolute;
      left:0;
      top:0;
      border-top:38px solid #e9e9e9;
      border-right:38px solid #f0f0f0;
      
    }
    .info{
      position:relative;
      z-index:3;
      p{
        font-size:14px;
        padding-top:8.5px;
      }
      span{
        font-size:11px;
        color:#9b9b9b;
        line-height:15px;
      }
      &:before{
        content:'1';
        display: block;
        position:absolute;
        left:-24px;
        top:0;
        font-size:13px;
      }
    }
  }
}
`)

const DetailWrap = styled.div`
.vedio{
  height:2.1rem;
}
`
const DownLoadWrap = border(styled.div`
.download{
  height:.425rem;
  background: #eee;
  padding:0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:#9b9b9b;
  font-size:.11rem;
  .download-box{
    display: flex;
    .iconfont{
    font-family:iconfont;
    font-size:.16rem;
    display: flex;
    flex-direction:column;
    align-items:center;
    margin-left:.05rem;
      >span{
        font-size:.09rem;
      }
    }
  }
}
`)

const CallAppWrap = border(styled.div`
.call-app{
  padding:15px;
  height:42px;

  .call-app-btn{
    color:#fff;
    font-size:14px;
    height:100%;
    border-radius: 5px;
    background: #77b991;
    line-height:42px;
    text-align:center;
  }
}
`)

const ContentWrap = border(styled.div`
position:relative;
padding:15px;
min-height:1.21rem;
background: #fcf;
h2{
  font-size:.2rem;
  line-height:.26rem;
  font-weight:normal;
}
h3{
  font-size:.14rem;
  line-height:.3rem;
  padding:.055rem 0;
  font-weight:normal;
}
p{
  font-size:.13rem;
  line-height:.21rem;
}
.see-move{
  position:absolute;
  left:0;bottom:0;
  height:41px;
  width:100%;
  background: #cff;
  font-family:iconfont;
  font-size:.2rem;
  line-height:41px;
  text-align: center;
  color:#ccc;
}
`)


export {
  ContainerWrap,
  DetailWrap,
  DownLoadWrap,
  CallAppWrap,
  ContentWrap
}