import styled from 'styled-components'
// import border from 'assets/styles/border'

const HeadWrap = styled.div`
  width:100%;
  position:fixed;
  top: 0;
  z-index:999;
header{
  .top-wrap{
    display: flex;
    justify-content: space-between;
    height:.4rem;
    background: #2f2f2f;
    padding:0 .16rem;
    .back{
      display: flex;
      align-items:center;
      img{
        width:.73rem;
        height:.15rem;
      }
    }
    .my{
      display: flex;
      align-items:center;
      color:#fff;
      font-size:.13rem;
    }
  }
  nav{
    height:.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    span{
      padding: 0 .25rem;
      font-size:.14rem;
      color:#9b9b9b;
      line-height:.2rem;
      &:after{
        content:'';
        display: block;
        width:28px;
        height:3px;
        background: transparent;
      }
    }
    .active{
      color: #d5b45c;
      &:after{
        content:'';
        display: block;
        width:28px;
        height:3px;
        background: #d5b45c;
        border-radius:2px;
      }
    }
  }
}
`

const Mainwrap = styled.div`
padding: 0 .16rem;
overflow:scroll;
color:#333;
margin-top:110px;
img{
  height:1.93rem;
  width:100%;
  display: block;
}
.title{
  line-height:.22rem;
  margin:.15rem 0 0 .05rem;
  font-weight: normal;
  font-size:.16rem;
}
.payInfo{
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height:.28rem;
  font-size:.1rem;
  color:#b2b2b2;
  font-weight: normal;
  
  >span{
    color:#d5b45c;
    font-size:.2rem; 
    span{
      font-size:.1rem;
      color:#b2b2b2;
      text-decoration:line-through; 
      margin-left:.05rem;
    }
  }
}
.list-wrap{
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between;
  margin-top:.17rem;
  li{
    width:1.66rem;
    height:1.68rem;
    margin-bottom:.17rem;
    .img-wrp{
      margin-bottom:.12rem;
      font-size:.1rem;
      color: #fff;
      position: relative;
      .discount{
        position: absolute;
        left:0;
        top:.1rem;
        width:.51rem;
        height:.18rem;
        
        border-top-right-radius: .24rem;
        border-bottom-right-radius: .24rem;
        background: #fb6969;
        
        line-height:.18rem;
        text-align: center;
      }
      .count{
        width:.4rem;
        height:.14rem;
        position: absolute;
        right: .05rem;
        bottom: .1rem;
        text-align: center;
        line-height:.14rem;
        background: #000;
        opacity: .3;
        border-radius:5px;
      }
      img{
        width:100%;
        height:.94rem;
        border-radius:4px;
      }

    }
    .about{
      height:.36rem;
      line-height:.18rem;
      font-size:.14rem;
      font-weight:normal;
      margin-bottom:0.04rem;
      overflow: hidden;
    }
  }
}
`
export{
  HeadWrap,
  Mainwrap
}
