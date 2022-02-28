import NXRequest from './request'

const nxRequest = new NXRequest({
  baseURL: process.env.REACT_APP_BASEURL,
  timeout: 10000,

  requestInterceptor: (config) => {
    return config
  },
  requestInterceptorCatch: (err) => {
    // console.log('请求失败拦截')
    return err
  },
  responsetInterceptor: (res) => {
    // console.log('响应成功拦截')
    return res
  }
  // responseInterceptorCatch: (err) => {
  //   return err
  // }
})

export default nxRequest
