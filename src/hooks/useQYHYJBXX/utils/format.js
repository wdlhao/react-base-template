const format1 = (result) => {
  const data = result;
  return {
    graphId: data.graphId,
    orgGraphId: data.orgGraphId,
    id: data.id,
    province: data.province,
    city: data.city,
    county: data.county,
    adminiLevel: data.adminiLevel,
    name:data.name,
    creditCode: data.creditCode,
    corporation: data.corporation,
    orgName: data.orgName,
    firmName: data.firmName,
    orgFirm: data.orgFirm,
    administrativeRegion: data.administrativeRegion,
    registrationType: data.registrationType,
    industry: data.industry,
    scale: data.scale,
    establishTime: data.establishTime,
    tel: data.tel,
    registeredFund: data.registeredFund,
    email: data.email,
    postalAddress: data.postalAddress,
    contactName: data.contactName,
    contactTel: data.contactTel,
    website: data.website,
    baseInfoData: [
      {
        title: "统一社会信用代码",
        info: data.creditCode,
      },
      {
        title: "企业注册地行政区域",
        info: data.administrativeRegion,
      },
      {
        title: "法人",
        info: data.corporation,
      },
      {
        title: "联系方式",
        info: data.telphone,
      },
      {
        title: "成立时间",
        info: data.establishTime,
      },
      {
        title: "注册资金",
        info: data.registerCapital,
      },
      {
        title: "所属工商联",
        info: data.orgName,
      },
      {
        title: "所属商会",
        info: data.firmName,
      },
    ],
    basicInfoData: [
      { title: "企业通讯地址", info: data.postalAddress},
      { title: "企业邮政编码", info: ""},
      { title: "联系人姓名", info: data.contactName },
      { title: "联系人手机号", info: data.contactTel },
      { title: "电子邮箱", info: data.email},
      { title: "办公电话", info: data.tel },
      { title: "传真号码", info: data.tel},
    ],
    mainBusiness:"",
    mainBusinessInfo:[
      { title: "主营业务所属行业", info: data.industry},
      { title: "企业官网", info: data.website},
      { title: "主营业务产业分类", info: ""},
    ],
    relatedPersonData:{
      name:"雷军",
      sex:"男",
      age:"52",
      rankTitles:["全国工商联副主席","北京市工商联副主席"],
      belongCompanyInfo:[
        { title: "所属企业", info: "北京小米科技有限责任公司" },
        { title: "所属商会", info: "芝罘区代表" },
        { title: "人大职务", info: "第十三届全国人大代表" },
        { title: "政府职务", info: "- -" },
        { title: "政协职务", info: "- -" },
      ],
      shareholderInfo:[
        { name: "雷军", shareRratio: "0.77802188",subscriAmount:"143,934.0万",actualAmount:"143,934.0万" },
        { name: "黎万强", shareRratio: "0.77802188",subscriAmount:"143,934.0万",actualAmount:"143,934.0万" },
        { name: "洪峰", shareRratio: "0.77802188",subscriAmount:"143,934.0万",actualAmount:"143,934.0万" },
        { name: "刘德", shareRratio: "0.77802188",subscriAmount:"143,934.0万",actualAmount:"143,934.0万" },
      ],
      keyPersonInfo:[
        { name: "雷军", job: "经理、董事长" },
        { name: "黎万强", job: "董事" },
        { name: "洪峰", job: "董事" },
        { name: "刘德", job: "监事" },
      ]
    },
    // 社会责任
    wanqiHelpsInfo:[
      { title: "产业帮扶名称", info: "- -" },
      { title: "项目类型", info: "- -" },
      { title: "投资日期", info: "- -" },
      { title: "投资所属行业", info: "- -" },
      { title: "户均增收", info: "- -" },
      { title: "产业帮扶项目惠及村名", info: "- -" },
    ],
    comGangInfo:[
      { title: "产业帮扶名称", info: "- -" },
      { title: "项目用途分类", info: "- -" },
      { title: "捐助日期", info: "- -" },
      { title: "捐款捐物合计", info: "- -" },
      { title: "产业帮扶项目惠及村名", info: "- -" },
    ],
    // 一带一路
    beltAndRoadData:{
      invArea:"欧洲-塞尔维亚",
      invNums:12,
      beltAndRoadInfo:[
        { title: "项目名称", info: "- -" },
        { title: "项目名称(英文)", info: "- -" },
        { title: "投资国家", info: "- -" },
        { title: "投资时间", info: "- -" },
        { title: "地址", info: "- -" },
        { title: "当地注册公司名称", info: "- -" },
        { title: "投资行业", info: "- -" },
        { title: "投资类型", info: "- -" },
      ]
    },
    // 负面信息
    negativeInfo:[
      { title: "序号", info: "- -" },
      { title: "失信被执行人名称", info: "- -" },
      { title: "执行法院", info: "- -" },
      { title: "执行依据文号", info: "- -" },
      { title: "被执行人的履行情况", info: "- -" },
      { title: "失信被执行人具体情形", info: "- -" },
      { title: "发布时间", info: "- -" },
      { title: "立案时间", info: "- -" },
    ]
  };
};

export { format1 };
