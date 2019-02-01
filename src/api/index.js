import request from '@/utils/request.js'


function getApi(method, params, data) {
  return request({
    url: '/verification-code/send',
    method,
    params,
    data
  })
}


export {getApi}