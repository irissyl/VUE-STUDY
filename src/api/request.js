//对axios进行二次封装
import axios from "axios";
import nprogress from "nprogress";
// 引入进度条样式
import 'nprogress/nprogress.css'


//利用axios的create方法,去创建一个axios实例
const requests=axios.create({
    //配置对象
    baseURL: '/api',
    //请求超时5s
    timeout: 5000,
})
//请求拦截器
requests.interceptors.request.use((config)=>{
    //config: 配置对象,对象里面有一个属性很重要 header请求头
    nprogress.start();
    return config;
})
//响应拦截器
requests.interceptors.response.use((res)=>{
    //成功的回调函数:  服务器响应数据回来以后,响应拦截器可以检测到,可以做一些事情
    nprogress.done();
    return res.data;
},(error)=>{
    //响应失败的回调
   return Promise.reject(new Error('Failed'))

})


//对外暴露
export default requests;