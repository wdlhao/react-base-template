//各模块公共接口
export const LOGIN = "/api/login/Login/login"; //{account} 登录
export const LOGOUT = "/api/login/Login/loginout"; //{account} 登出
export const GetAllDicts="/api/common/Common/GetAllDicts";////获取所有的字典数据
export const GetAllProvince="/api/common/Common/GetAllProvince";//取省列表

// 首页-设备规模-one
export const LineStatistic="/api/asset/Asset/LineStatistic";  // 电缆线路规模-各电压等级公里数
export const LineTrendAnalysis="/api/asset/Asset/LineTrendAnalysis";  // 电缆线路规模
export const ProjectStageStatistic="/api/asset/Asset/ProjectStageStatistic";  
export const GetProjectStatistic="/api/asset/Asset/GetProjectStatistic";  // 生产准备及验收工程进度管控
export const TunnelScaleStatistic="/api/asset/Asset/TunnelScaleStatistic";  // 电缆通道规模
export const FaultPartStatistic="/api/asset/Asset/FaultPartStatistic";  // 电缆设备缺陷分布-具体部件数量统计
export const FaultStatistic="/api/asset/Asset/FaultStatistic";  // 电缆设备缺陷分布
export const HiddenLevelStatistic="/api/asset/Asset/HiddenLevelStatistic";  // 电缆设备隐患分布-具体隐患类型统计
export const HiddenStatistic="/api/asset/Asset/HiddenStatistic";  // 电缆设备隐患分布
export const TunnelTrendAnalysis="/api/asset/Asset/TunnelTrendAnalysis";  // 电缆通道规模趋势分析
export const GetLineDetailList="/api/asset/Asset/GetLineList";  // 电缆通道规模-详情线路列表

// 首页-设备规模-two
export const ImportanceLevelTrendAnalysis="/api/asset/Asset/ImportanceLevelTrendAnalysis";  // 在线监测装置统计
export const TunnelImportanceLevelStatistic="/api/asset/Asset/TunnelImportanceLevelStatistic";  // 电缆通道风险等级分布-tab数据
export const TunnelRiskLevelStatistic="/api/asset/Asset/TunnelRiskLevelStatistic";  // 电缆通道风险等级分布
export const JointTrendAnalysis="/api/asset/Asset/JointTrendAnalysis";  // 电缆接头趋势分析
export const EndTrendAnalysis="/api/asset/Asset/EndTrendAnalysis";  // 电缆终端规模
export const OnlineDeviceSubTypeStatistic="/api/asset/Asset/OnlineDeviceSubTypeStatistic";  // 在线监测系统运行状态-tab数据
export const OnlineDeviceStatusStatistic="/api/asset/Asset/OnlineDeviceStatusStatistic";  // 在线监测系统运行状态
export const GetAssetDtoList="/api/asset/Asset/GetAssetDtoList";  // 电缆接头/终端规模详情
export const GetOnlineDeviceDtoList="/api/asset/Asset/GetOnlineDeviceDtoList";  // 在线监测装置统计-详情

// 首页-状态预警
export const LineStatusEvaluateStatistic="/api/asset/Asset/LineStatusEvaluateStatistic";  // 电缆线路历史状态评估统计
export const DeviceQuestionStatistic="/api/asset/Asset/DeviceQuestionStatistic";  // 同类设备运行性能统计
export const LineWarningImportLevelStatistic="/api/asset/Asset/LineWarningImportLevelStatistic";  // 电缆线路预警分布
export const LineWarningStatistic="/api/asset/Asset/LineWarningStatistic";  // 电缆线路历史检修试验统计
export const LineStatistics="/api/asset/Asset/LineStatistics";  // 线路数量统计
export const GetRiskJudge="/api/risklevel/RiskLevel/GetRiskJudge";  // 同类设备风险研判
export const GetLineEvaluateDtoPage="/api/asset/Asset/GetLineEvaluateDtoPage";  // 电缆线路历史状态评估统计--详情列表
export const GetLineInfoByLineIDList="/api/asset/Asset/GetLineInfoByLineIDList";  // 同类线路风险研判列表--详情列表
export const GetTunnelInfoByTunnelIDList="/api/asset/Asset/GetTunnelInfoByTunnelIDList";  // 同类通道风险研判列表--详情列表

// 首页-风险预警
export const GetRiskWarringLevelDistribute="/api/risklevel/RiskLevel/GetRiskWarringLevelDistribute";  // 电缆通道状态预警
export const TunnelHiddenHistory="/api/hidden/Hidden/TunnelHiddenHistory";  // 电缆通道历史隐患统计
export const GetTunnelWarringLevelDistribute="/api/risklevel/RiskLevel/GetTunnelWarringLevelDistribute";  // 同类通道运行风险统计
export const OnlineDeviceHistoryStatistic="/api/asset/Asset/OnlineDeviceHistoryStatistic";  // 电缆通道历史在线监测
export const TunnelStatistics="/api/asset/Asset/TunnelStatistics";  // 地图通道数量统计

// 首页-检测装备
export const RuningStatus="/api/OnlineMonitorAnalysis/OnlineMonitorAnalysis/RuningStatus";  // 在线监测系统运行状态
export const MonitorDeviceStatus="/api/OnlineMonitorAnalysis/OnlineMonitorAnalysis/MonitorDeviceStatus";  // 运检装备统计
export const MonitorAlarmEffective="/api/OnlineMonitorAnalysis/OnlineMonitorAnalysis/MonitorAlarmEffective";  // 在线监测系统报警有效性
export const MonitorDetectionEffectiveTab="/api/OnlineMonitorAnalysis/OnlineMonitorAnalysis/MonitorDetectionEffectiveTab";  // 在线监测系统报警有效性-tab
export const MonitorDetectionEffective="/api/OnlineMonitorAnalysis/OnlineMonitorAnalysis/MonitorDetectionEffective";  // 运检装备检测有效性
export const ManufacturerReliabilityAnalysis="/api/OnlineMonitorAnalysis/OnlineMonitorAnalysis/ManufacturerReliabilityAnalysis";  // 同类设备可靠性分析
export const ManufacturerReliabilityJudge="/api/OnlineMonitorAnalysis/OnlineMonitorAnalysis/ManufacturerReliabilityJudge";  // 同类设备可靠性研判
export const OpemonDevStatistics="/api/asset/Asset/OpemonDevStatistics";  // 在线监测设备数量统计
export const GetTInspectionEquipList="/api/asset/Asset/GetTInspectionEquipList";  // 检测装备数量统计
export const RuningStatusCrossList="/api/OnlineMonitorAnalysis/OnlineMonitorAnalysis/RuningStatusCrossList";  // 在线监测系统运行状态-详情列表
export const MonitorAlarmEffectiveCrossList="/api/OnlineMonitorAnalysis/OnlineMonitorAnalysis/MonitorAlarmEffectiveCrossList";  // 在线监测系统报警有效性-详情列表
export const MonitorDetectionEffectiveCrossList="/api/OnlineMonitorAnalysis/OnlineMonitorAnalysis/MonitorDetectionEffectiveCrossList";  // 运检装备检测有效性-详情列表
export const ManufacturerReliabilityJudgeCrossList="/api/OnlineMonitorAnalysis/OnlineMonitorAnalysis/ManufacturerReliabilityJudgeCrossList";  // 同类设备可靠性研判--详情列表
export const ManufacturerReliabilityAnalysisCrossList="/api/OnlineMonitorAnalysis/OnlineMonitorAnalysis/ManufacturerReliabilityAnalysisCrossList";  // 同类设备可靠性分析--详情列表
export const MonitorDeviceStatusCrossList="/api/OnlineMonitorAnalysis/OnlineMonitorAnalysis/MonitorDeviceStatusCrossList";  // 运检装备统计--详情列表



// 首页-运检业务
export const HiddenEffectAnalysis="/api/GovernanceEffectAnalysis/GovernanceEffectAnalysis/HiddenEffectAnalysis";  // 隐患治理任务执行成效管理
export const ElectTestEffectAnalysis="/api/GovernanceEffectAnalysis/GovernanceEffectAnalysis/ElectTestEffectAnalysis";  // 带电检测任务成效管理
export const FaultEffectAnalysis="/api/GovernanceEffectAnalysis/GovernanceEffectAnalysis/FaultEffectAnalysis";  // 缺陷处置任务成效管理
export const OverhaulTestEffectAnalysis="/api/GovernanceEffectAnalysis/GovernanceEffectAnalysis/OverhaulTestEffectAnalysis";  // 检修试验任务成效管理
export const RiskEffectAnalysis="/api/GovernanceEffectAnalysis/GovernanceEffectAnalysis/RiskEffectAnalysis";  // 风险治理任务成效管理
export const OverhaulTaskEffectAnalysis="/api/GovernanceEffectAnalysis/GovernanceEffectAnalysis/OverhaulTaskEffectAnalysis";  // 检修工作任务成效管理
export const HiddenEffectAnalysisCrossList="/api/GovernanceEffectAnalysis/GovernanceEffectAnalysis/HiddenEffectAnalysisCrossList";  // 隐患治理任务执行成效管理--详情列表
export const ElectTestEffectAnalysisCrossList="/api/GovernanceEffectAnalysis/GovernanceEffectAnalysis/ElectTestEffectAnalysisCrossList";  // 带电检测任务成效管理--详情列表
export const FaultEffectAnalysisCrossList="/api/GovernanceEffectAnalysis/GovernanceEffectAnalysis/FaultEffectAnalysisCrossList";  // 缺陷处置任务成效管理--详情列表
export const OverhaulTestEffectAnalysisCrossList="/api/GovernanceEffectAnalysis/GovernanceEffectAnalysis/OverhaulTestEffectAnalysisCrossList";  // 检修试验任务成效管理--详情列表
export const RiskEffectAnalysisCrossList="/api/GovernanceEffectAnalysis/GovernanceEffectAnalysis/RiskEffectAnalysisCrossList";  // 风险治理任务成效管理--详情列表
export const OverhaulTaskEffectAnalysisCrossList="/api/GovernanceEffectAnalysis/GovernanceEffectAnalysis/OverhaulTaskEffectAnalysisCrossList";  // 检修工作任务成效管理--详情列表




//GIS
export const GetXLGis = "/api/gis/Gis/GetXLGis"; //获取线路GIS
export const GetTDGis = "/api/gis/Gis/GetTDGis"; //获取通道GIS

//高压电缆设备状态管控-缺陷分析管控
export const FaultCountStatistics="/api/faults/Faults/FaultCountStatistics";//缺陷数量统计
export const FlultVoltageLevelAnalysis="/api/faults/Faults/FlultVoltageLevelAnalysis";//缺陷电压等级分布
export const FlultRunYeahAnalysis="/api/faults/Faults/FlultRunYeahAnalysis";//缺陷运行年限分布 饼状图
export const FaultLoadLevelAnalysis="/api/faults/Faults/FaultLoadLevelAnalysis";//缺陷负荷率分布
export const FlultPartYeahRunAnalysis="/api/faults/Faults/FlultPartYeahRunAnalysis";//缺陷运行年限分布 柱状图
export const GetFaultAnalysisAll="/api/faults/Faults/GetFaultAnalysisAll";//获取缺陷统计分析列表
export const DetailFaultTable = "/api/faults/Faults/GetFaultList";//缺陷分析详情
export const DetailFaultInfo = "/api/faults/Faults/GetFaultAnalysisDetail";//缺陷分析详情

//高压电缆设备状态管控-隐患分析管控
export const HiddenCountStatistics="/api/hidden/Hidden/HiddenCountStatistics";//隐患数量统计
export const HiddenDangerTypeStatistic="/api/hidden/Hidden/HiddenDangerTypeStatistic";//隐患数量及分布
export const HiddenDangerTrend="/api/hidden/Hidden/HiddenDangerTrend";//隐患变化趋势
export const HiddenDangerSourceTypeStatistic="/api/hidden/Hidden/HiddenDangerSourceTypeStatistic";//隐患来源统计
export const HiddenDangerLevelTrend="/api/hidden/Hidden/HiddenDangerLevelTrend";//隐患等级统计
export const GetHiddenAnalysisAll="/api/hidden/Hidden/GetHiddenAnalysisAll";//隐患统计分析列表
export const GetHiddenAnalysisDetail="/api/hidden/Hidden/GetHiddenAnalysisDetail";//获取隐患统计分析详情
export const GetHiddenAll="/api/hidden/Hidden/GetHiddenAll";//历史隐患


//高压电缆设备状态管控-故障分析管控
export const TroubleCountStatistics = "/api/troubles/Troubles/TroubleCountStatistics"; // 故障数量统计
export const TroubleReasonAnalysis = "/api/troubles/Troubles/TroubleReasonAnalysis"; // 故障原因分布
export const TroublePartAnalysis = "/api/troubles/Troubles/TroublePartAnalysis"; // 故障部件分布
export const TroubleDeviceRunYeahAnalysis = "/api/troubles/Troubles/TroubleDeviceRunYeahAnalysis"; // 故障部件运行年限
export const GetTroubleAnalysisAll = "/api/troubles/Troubles/GetTroubleAnalysisAll"; // 故障统计分析列表
export const GetTroubleAnalysisDetail = "/api/troubles/Troubles/GetTroubleAnalysisDetail"; // 频发故障统计分析-详情
export const GetTroubleAnalysisInfo = "/api/troubles/Troubles/GetTroubleDetail"; // 频发故障-详情
export const GetTroubleAll = "/api/troubles/Troubles/GetTroubleAll"; // 历史故障-详情



//高压电缆设备状态管控-老化分析管控
export const OldCableProvince = "/api/oldcable/OldCable/OldCableProvince"; // 老旧电缆 省份数据
export const GetLineIncreaseScale = "/api/oldcable/OldCable/GetLineIncreaseScale"; // 老旧电缆线路增长趋势
export const GetLineRunYearScale = "/api/oldcable/OldCable/GetLineRunYearScale"; // 老旧电缆运行年限分布
export const GetAllOldCable = "/api/oldcable/OldCable/GetAllOldCable"; // 老化状态实时管控
export const GetOldCableDtoByLineID = "/api/oldcable/OldCable/GetOldCableDtoByLineID"; // 老化状态实时管控-详情
export const GetAllOverhaulTeamList = "/api/overhaulteam/OverhaulTeam/GetAllOverhaulTeamList"; // 获取检修记录列表
export const GetOpemonDevAccountAll = "/api/OnlineMonitor/OnlineMonitor/GetOpemonDevAccountAll"; // 在线监测记录列表
export const GetLineTargetEvaluate = "/api/oldcable/OldCable/GetLineTargetEvaluate"; // 指标量化评价




//高压电缆设备状态管控-通道风险分析管控
export const TunnelRiskLevelSummary = "/api/risklevel/RiskLevel/GetRiskLevelSummary"; // 通道风险分析管控 图表汇总
export const TunnelRiskTunnelLevelMapChat = "/api/risklevel/RiskLevel/GetTunnelLevelMapChat"; // 各省份统计
export const TunnelRiskCircularChart = "/api/risklevel/RiskLevel/GetLevelClassifyCircularChart"; // 风险等级分类统计 chart
export const TunnelRiskLinesChart = "/api/risklevel/RiskLevel/GetLevelLinesChart"; // 通道等级风险统计
export const TunnelRiskFactorChart = "/api/risklevel/RiskLevel/GetRiskFactorChart"; //风险要素

export const TunnelRiskLineList = "/api/risklevel/RiskLevel/GetTunnelRiskList"; // 大列表
export const TunnelRiskDetailTable = "/api/risklevel/RiskLevel/GetTunnelRiskDetail"; //详情小列表
export const TunnelRiskInfo = "/api/risklevel/RiskLevel/GetTunnelDetailByTunnelID"; //详情
//高压电缆设备状态管控-负荷分析管控

export const LoadLevelSummary = "/api/Load/Load/LoadCountStatistics"; //各省份统计
export const LoadCircularChart = "/api/Load/Load/LoadRealTimeStatistics"; // 风险等级分类统计 chart
export const LoadLinesChart = "/api/Load/Load/LoadDynamicMaxStatistics"; // 通道等级风险统计

export const LoadLineList = "/api/Load/Load/GetLoadAnalysisAll"; // 大列表
//export const LoadDetailTable = "/api/risklevel/RiskLevel/GetLoadDetail"; //详情小列表
export const LoadInfo = "/api/Load/Load/GetLoadAnalysisDetail"; //详情

//高压电缆设备状态管控-线路运行状态预警 
export const LineWarningCountStatistics = "/api/LineWarningRiskAnalysis/LineWarningRiskAnalysis/LineWarningCountStatistics"; // 风险预警-数据统计
export const LineWarningTrendStatistics = "/api/LineWarningRiskAnalysis/LineWarningRiskAnalysis/LineWarningTrendStatistics"; // 风险预警-发展趋势
export const LineWarningSpreadStatistics = "/api/LineWarningRiskAnalysis/LineWarningRiskAnalysis/LineWarningSpreadStatistics"; // 等级分布
export const LineWarningGisMapStatistics = "/api/LineWarningRiskAnalysis/LineWarningRiskAnalysis/LineWarningGisMapStatistics"; // gis省份数据
export const GetLineWarningList = "/api/LineWarningRiskAnalysis/LineWarningRiskAnalysis/GetLineWarningList"; // 列表
export const GetLineWarningDetail = "/api/LineWarningRiskAnalysis/LineWarningRiskAnalysis/GetLineWarningDetail"; // 详情



//高压电缆设备状态管控-线路故障状态预警

//高压电缆设备状态管控-线路老化状态预警 

//高压电缆设备状态管控-通道风险预警 
export const GetWarringAll = "/api/risklevel/RiskLevel/GetWarringAll"; // 预警列表
export const GetWarringByTunnelID = "/api/risklevel/RiskLevel/GetWarringByTunnelID"; // 预警基本信息
export const GetTunneliskWarringLevelMapChat = "/api/risklevel/RiskLevel/GetTunneliskWarringLevelMapChat"; // 通道gis
export const GetRiskBeforeTrendList = "/api/risklevel/RiskLevel/GetRiskBeforeTrendList"; // 通道风险发展趋势-详情信息



//高压电缆设备状态管控-线路过负荷预警 


//运检业务管控-工程质量分析
export const GetProjectHistoryStatistic = "/api/asset/Asset/GetProjectHistoryStatistic"; //工程质量问题历史走向
export const GetPrepareProjectAll="/api/prepareprojects/PrepareProjects/GetPrepareProjectAll";//工程质量分析管理列表
export const GetPrepareProjectByID="/api/prepareprojects/PrepareProjects/GetPrepareProjectByID";//工程质量分析管理详情


//运检业务管控-专项治理工作分析
export const GetAllFlawBearingList="/api/bearinganalyse/BearingAnalyse/GetAllFlawBearingList";//获取所有缺陷处理质量成效及承载力
export const GetAllRiskGovernmentBearingList="/api/bearinganalyse/BearingAnalyse/GetAllRiskGovernmentBearingList";//获取所有风险治理质量成效及承载力";
export const GetAllHiddenBearingList="/api/bearinganalyse/BearingAnalyse/GetAllHiddenBearingList";//获取所有隐患
export const GetFlawBearingByID="/api/bearinganalyse/BearingAnalyse/GetFlawBearingByID";//获取某个缺陷处理质量成效及承载力
export const GetHiddenBearingByID="/api/bearinganalyse/BearingAnalyse/GetHiddenBearingByID";//获取某个隐患处置质量成效及承载力;
export const GetRiskGovernmentBearingByID="/api/bearinganalyse/BearingAnalyse/GetRiskGovernmentBearingByID";//获取某个风险治理质量成效及承载力;
//运检业务管控-运维检修分析
export const OverhaulRecordsList="/api/bearinganalyse/BearingAnalyse/OverhaulRecordsList";//试验工作质量成效及承载力分析列表
export const GetOverhaulRecordsByID="/api/bearinganalyse/BearingAnalyse/GetOverhaulRecordsByID";//试验工作质量成效及承载力分析详情

//指标管理-规模指标
export const TunnelTrendYearAnalysis="/api/asset/Asset/TunnelTrendYearAnalysis";//通道长度5年趋势
export const DenseTunnelTrendYearAnalysis="/api/asset/Asset/DenseTunnelTrendYearAnalysis";//密集通道长度5年趋势
export const MixedTunnelTrendYearAnalysis="/api/asset/Asset/MixedTunnelTrendYearAnalysis";//输配混合通道长度5年趋势
export const GetTunnelList="/api/asset/Asset/GetTunnelList";//通道分级列表

//指标管理-运行指标
export const FaultTrendAnalysis="/api/faults/Faults/FaultTrendAnalysis";//缺陷变化
export const TroubleTrendAnalysis="/api/troubles/Troubles/TroubleTrendAnalysis";// 近五年故障变化趋势
export const OldLineTrendAnalysis="/api/oldcable/OldCable/OldLineTrendAnalysis";//老化状态变化趋势

//指标管理-检修指标
export const EleTargetAnaList ="/api/elect/Elect/GetAllElectList";
export const EleTargetAnaDetail ="/api/elect/Elect/GetElectById";
export const GetFaultList = "/api/FaultTimelinessAnalysis/FaultTimelinessAnalysis/GetFaultTimelinessList";//缺陷指标列表 
export const GetHiddenTimelinessList = "/api/HiddenTimelinessAnalysis/HiddenTimelinessAnalysis/GetHiddenTimelinessList"; //隐患处置指标
export const GetHiddenTimelinessDetail = "/api/HiddenTimelinessAnalysis/HiddenTimelinessAnalysis/GetHiddenTimelinessDetail"; //隐患处置指标详情
export const GetFaultListDetail = "/api/FaultTimelinessAnalysis/FaultTimelinessAnalysis/GetFaultTimelinessDetail"; //缺陷指标列表详情
export const GetInspectTimelinessList = "/api/InspectTimelinessAnalysis/InspectTimelinessAnalysis/GetInspectTimelinessList";//巡检指标列表
export const GetInspectTimelinessDetail = "/api/InspectTimelinessAnalysis/InspectTimelinessAnalysis/GetInspectTimelinessDetail";//巡检指标列表详情
export const GetRiskLevelTimelinessList = "/api/RiskLevelTimelinessAnalysis/RiskLevelTimelinessAnalysis/GetRiskLevelTimelinessList";//风险处置指标
export const GetRiskLevelTimelinessDetail = "/api/RiskLevelTimelinessAnalysis/RiskLevelTimelinessAnalysis/GetRiskLevelTimelinessDetail";//风险处置指标
export const GetAllOverhaulTeamById = "/api/overhaulteam/OverhaulTeam/GetAllOverhaulTeamById"; // 获取运维检修指标详情
// 高压电缆设备运行阶段质量管理
export const GetDeviceExamineAll="/api/deviceexamine/DeviceExamine/GetDeviceExamineAll"; // 设备入网考核列表
export const GetEntranceExamRecords="/api/deviceexamine/DeviceExamine/GetEntranceExamRecords"; // 入网考核
export const SaveEntranceExamRecords="/api/deviceexamine/DeviceExamine/SaveEntranceExamRecords"; // 入网考核-保存
export const AddDevice="/api/deviceexamine/DeviceExamine/AddDevice"; // 入网考核-添加台账
export const GetDeviceQuestionAll="/api/asset/Asset/GetDeviceQuestionAll"; // 设备质量-列表
export const GetDeviceQuestionDetail="/api/asset/Asset/GetDeviceQuestionDetail"; // 设备质量-详情
export const GetDeviceProducerAll="/api/asset/Asset/GetDeviceProducerAll"; // 优质供应商目录-列表
export const GetDeviceProducerDetail="/api/asset/Asset/GetDeviceProducerDetail"; // 优质供应商目录-详情


// 高压电缆运检装备质量管理
export const GetAllElectDeviceAccount="/api/electdeviceaccount/ElectDeviceAccount/GetAllElectDeviceAccount"; // 带电检测-设备入网考核-列表
export const GetElectDeviceDetailByID="/api/electdeviceaccount/ElectDeviceAccount/GetElectDeviceDetailByID"; // 带电检测-设备入网考核-详情
export const GetElectDeviceEffectList="/api/ElectDeviceEffectAnalysis/ElectDeviceEffectAnalysis/GetElectDeviceEffectList"; // 带电检测-设备应用成效-设备可靠性-列表
export const GetElectDeviceEffectDetail="/api/ElectDeviceEffectAnalysis/ElectDeviceEffectAnalysis/GetElectDeviceEffectDetail"; // 带电检测-设备应用成效-设备可靠性-详情
export const GetMonitorDeviceEffectList="/api/MonitorDeviceEffectAnalysis/MonitorDeviceEffectAnalysis/GetMonitorDeviceEffectList"; // 在线监测-设备应用成效-设备可靠性-列表
export const GetMonitorDeviceEffectDetail="/api/MonitorDeviceEffectAnalysis/MonitorDeviceEffectAnalysis/GetMonitorDeviceEffectDetail"; // 在线监测-设备应用成效-设备可靠性-详情
export const GetSupplierElectDeviceEffectList="/api/SupplierElectDeviceEffectAnalysis/SupplierElectDeviceEffectAnalysis/GetSupplierElectDeviceEffectList"; // 供应商-带电检测-列表
export const GetSupplierElectDeviceEffectDetail = "/api/SupplierElectDeviceEffectAnalysis/SupplierElectDeviceEffectAnalysis/GetSupplierElectDeviceEffectDetail"; // 供应商-带电检测-详情
export const GetSupplierMonitorDeviceEffectList="/api/SupplierMonitorDeviceEffectAnalysis/SupplierMonitorDeviceEffectAnalysis/GetSupplierMonitorDeviceEffectList"; // 供应商-在线监测-列表
export const GetSupplierMonitorDeviceEffectDetail="/api/SupplierMonitorDeviceEffectAnalysis/SupplierMonitorDeviceEffectAnalysis/GetSupplierMonitorDeviceEffectDetail"; // 供应商-在线监测-详情
export const GetSupplierEffectList="/api/SupplierEffectAnalysis/SupplierEffectAnalysis/GetSupplierEffectList"; // 供应商-分级评价-列表
export const GetSupplierEffectDetail="/api/SupplierEffectAnalysis/SupplierEffectAnalysis/GetSupplierEffectDetail"; // 供应商-分级评价-详情
export const GetAllElectList="/api/elect/elect/GetAllElectList"; // 带电检测-运检列表


export const GetTroubleEffectList = "/api/TroubleEffectAnalysis/TroubleEffectAnalysis/GetTroubleEffectList"; //线路抢修策略
export const GetTroubleEffectDetail = "/api/TroubleEffectAnalysis/TroubleEffectAnalysis/GetTroubleEffectDetail"; //线路抢修策略
export const GetEmergencyPlanList = "/api/EmergencyPlan/EmergencyPlan/GetEmergencyPlanList";  //应急预案列表
export const GetEmergencyPlanDetail = "/api/EmergencyPlan/EmergencyPlan/GetEmergencyPlanDetail";  //应急预案详情

export const GetRiskRiskFactorScoreList = "/api/risklevel/RiskLevel/GetRiskRiskFactorScoreList";  //通道风险分析管控 风险要素分类统计点击穿透
