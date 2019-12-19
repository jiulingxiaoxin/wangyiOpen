import axios from 'axios'
export const get = ({
  url
})=>{
  return axios({
    method:'get',
    url
  }).then((res)=>{
    return res
  }).catch((err)=>{
    return err.message
  })
}