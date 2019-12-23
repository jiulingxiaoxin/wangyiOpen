import _ from 'lodash'
const formatTime=(time)=>{
  let date = new Date(time) 
  return date.getFullYear() + '/' + (~~date.getMonth()+1) + '/' +  date.getDate()
}

const formatPlayTime = (time,type) =>{
  let h =null
  let m =null
  if(type){
    h = Math.floor( time / 60 )
    m = Math.floor((time - h * 60))
    return `${h}:${m}`
  }
  h = Math.floor( time / 60 )
  m = time % 60
  return `${h}'${m}''`
}


const formatView=(num)=>{
  if(num>10000){
    let count = _.round(num/10000,1)
    return count + '万'
  }
  return num
}
const formatPrice = (price)=>{
  return _.round(price/100)
}

export{
  formatTime,
  formatView,
  formatPrice,
  formatPlayTime
}