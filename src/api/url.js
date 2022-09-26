// 各模块公共接口
export const Login = "/api/login";                              // {account} 登录
export const Logout = "/api/loginout";                          // {account} 登出
export const GetAllDicts = "/api/common/GetAllDicts";                // 获取所有的字典数据
export const GetAllProvince = "/api/common/GetAllProvince";          // 取省列表

// 首页-设备规模
export const LineStatistic = "/api/asset/Asset/LineStatistic";                  
export const LineTrendAnalysis = "/api/asset/Asset/LineTrendAnalysis";          
export const ProjectStageStatistic = "/api/asset/Asset/ProjectStageStatistic";  
export const GetProjectStatistic = "/api/asset/Asset/GetProjectStatistic";      
