import axios from 'axios'

let request = axios.create({
    baseURL: 'http://api.test.yituwangluo.com',
    timeout: 5000,
})

request.interceptors.request.use(
  config => {
    console.log('---- config: ', config);
    return config
  },
  error => {
    Promise.reject(error)
  }
)




export default request