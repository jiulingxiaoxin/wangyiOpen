import _ from 'lodash'
const formatTime=(time)=>{
  let date = new Date(time) 
  return date.getFullYear() + '/' + (~~date.getMonth()+1) + '/' +  date.getDate()
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
  formatPrice
}