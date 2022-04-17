/**
 * axios配置
 */
import axios from 'axios'
import { Toast } from 'vant'

// 设置统一的url
axios.defaults.baseURL = import.meta.env.VITE_APP_REQUEST_HOST

// 设置统一的超时
axios.defaults.timeout = 6000

/* 请求拦截器 */
axios.interceptors.request.use(
  (config) => {
    // 添加token到header
    let token = localStorage.getItem('access_token')
    if (token) {
      config.headers['Authorization'] = token
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

/* 响应拦截器 */
axios.interceptors.response.use(
  (res) => {
    // 登录过期处理
    if (res.data.code === 401) {
      Toast('登录状态已过期, 请退出重新登录!')
      return Promise.reject(new Error(res.data.message))
    }
    // token自动续期
    let access_token = res.headers['Authorization']
    if (access_token) {
      localStorage.removeItem('access_token');
      if (access_token) {
        localStorage.setItem('access_token', access_token);
      }
    }
    return res
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axios
