import styled from 'styled-components'
import border from 'assets/styles/border'

const HeadWrap = styled.div`
  flex-shrink:0;
  padding:0 .1rem;
  display:flex;
  justify-content: space-between;
  align-items:center;
  box-sizing:content-box;
  height:.49rem;
  background:#286a46;
  img{
    width:1.46rem;
    height:.28rem;
  }
`

const NavWrap = border(styled.div`
  flex-shrink:0;
  height:.44rem;
  width:100%;
  display:flex;
  justify-content: space-between;
  overflow:hidden;
  background:#fff;
  .nav-box{
    width:100%;
    >div{
      overflow-x:scroll;
      display: flex;
      align-items:center;
      height:49px;
      float:left;
      a{
        display:block;
        height:.17rem;
        padding: 0 .11rem;
        line-height:.17rem;
        font-size:.16rem;
        color:#555;
        text-align:center;
        white-space:nowrap;
      }
    }
  }
  span{
    display: block;
    text-align: center;
    line-height:.45rem;
    height:100%;
    width:.45rem
  }
  .active{
    color:#286a46 !important
  }   
`)



export {
  HeadWrap,
  NavWrap
}