import styled from 'styled-components'

const ContainerWrap = styled.div`
display:flex;
flex-direction:column;
height:100%;
`
const LoadingWrap = styled.div`
.loading{
    font-size: .25rem;
    display: inline-block;
    vertical-align: middle;
    width: .25rem;
    height: .25rem;
    color: #999;
  }
`

const ListWrap = styled.ul`
@keyframes loading {
  0%{
    transform:rotate(0deg)
  }
  25%{
    transform:rotate(120deg)
  }
  50%{
    transform:rotate(240deg)
  }
  100%{
    transform:rotate(360deg)
  }
}
@-webkit-keyframes loading{
  0%{
    transform:rotate(0deg)
  }
  25%{
    transform:rotate(120deg)
  }
  50%{
    transform:rotate(240deg)
  }
  100%{
    transform:rotate(0deg)
  }
}
.loading-wrap{
  margin-top:.2rem;
  display: flex;
  justify-content: center;
  .loading{
      font-size: .25rem;
      display: inline-block;
      vertical-align: middle;
      width: .25rem;
      height: .25rem;
      color: #999;
      animation: loading 1s infinite linear;
      -webkit-animation: loading 1s infinite linear;
    }
}
li{
  
  margin:17px 12px;
  
  a{
    display: flex;
    align-items: center;
    position: relative;
    width:100%;
    height:100%;
    color:0;
    .img-box{
      width:1.13rem;
      height:.87rem;
      margin: 0 .13rem .06rem 0;
      .img-wrap{
        height:.8rem;
        border-top: 2px solid #f8f8f8;
        img{
          width:100%;
          height:100%;
        }
      }
      .wrap-top{
        position:absolute;
        left:0;top:.115rem;
        width:1.13rem;
        z-index:3
      }
      .wrap-m{
        position:absolute;
        left:.0575rem;top:.0575rem;
        width:1.01rem;
        z-index:2;
      }
      .wrap-b{
        position:absolute;
        left:.115rem;top:0rem;
        width:.9rem;
        z-index:1;
      }
    }
    >div{
      color:#808080;
      h3{
        color:#000;
        font-size:.17rem;
        line-height:.22rem;
        font-weight: normal;
        width:2.21rem;
        margin-bottom:.05rem;
      }
      p{
        font-size:.11rem;
        line-height:.15rem;
      }
    }
  }
}
`
export {
  ListWrap,
  ContainerWrap,
  LoadingWrap
}