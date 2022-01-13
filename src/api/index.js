//统一API管理
import request from "./request";

//三级联动请求接口
// url:/product/getBaseCategoryList get
//发请求:axios发请求返回结果promise对象
export const reqCategoryList = ()=> request({url: '/product/getBaseCategoryList',method: 'get'})

 








