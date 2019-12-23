import styled from 'styled-components'
import border from 'assets/styles/border'
const HomeMainWrap = styled.div`
.home-main-wrap{
  position: relative;
  img{
    width:100%;
    height:1.9rem;
    background: #ddd;
  }
  .home-vedio-time{
    position:absolute;
    display: flex;
    justify-content:flex-end;
    right:0;bottom:15px;
    width:95px;
    height:20px;
    padding:0 10px;
    background: linear-gradient(262deg,rgba(0,0,0,.53),transparent 80%);
    span{
      color:#fff;
      font-size:10px;
      line-height:20px
    }
  }
}
.summarize{
  background: #fff;
  padding:.11rem .16rem;
  color:#4a4a4a;
  h3{
    margin-bottom:.07rem;
    font-size:.1rem;
    line-height:.12rem;
    color:#bababa;
    font-weight: normal;
  }
  h4{
    margin-bottom:.1rem;
    line-height:.2rem;
    font-size:.17rem;
    font-weight: normal;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow: hidden;
  }
  h5{
    font-size:.13rem;
    line-height:.16rem;
    height:.32rem;
    overflow: hidden;
    font-weight: normal;
  }
  .share-wrap{
    height:.25rem;
    margin-top:.11rem;
    display: flex;
    justify-content: space-between;
    font-size:.12rem;
    color:#9b9b9b;
    line-height:.25rem;
  }
}
`

const SummarizeWrap = border(styled.div`
height:83px;
`)
export {
  HomeMainWrap,
  SummarizeWrap
}