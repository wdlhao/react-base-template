// 各模块公共接口
export const Login = "/api/login";                              // {account} 登录
export const Logout = "/api/loginout";                          // {account} 登出
export const GetAllDicts = "/api/common/GetAllDicts";                // 获取所有的字典数据
export const GetAllProvince = "/api/common/GetAllProvince";          // 取省列表

// 综合查询
// 企业会员
export const enterprise_member_info = "/api/graph_search/enterprise_member_info";  //  详情页-基本信息              
export const org_enterprise_member = "/api/graph_search/org_enterprise_member";  // 
