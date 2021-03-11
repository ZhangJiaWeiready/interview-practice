/*
 * @Author: zhangjiawei
 * @Date: 2021-03-10 11:48:06
 */
import axios from 'axios'
const commonHttp = axios.create({
  baseURL: '',
  timeout: ''
})
// 请求拦截器
// 响应拦截器
//   处理