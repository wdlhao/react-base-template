// import { Login,Logout,GetAllDicts,GetAllProvince } from "@/api/url.js";
import React from "react";

function Test() {
  console.log(React.Urls);
  console.log(React.Request );

  const searchHandle = () => {
    //  let arg = {
    //    url: React.Urls.Login,
    //    method: "get",
    //    data: searchForm,
    //  };
    //  React.Request(arg).then((res) => {
    //    loading.value = false;
    //    searchForm.total = res.Total;
    //    tableData.value = res.List?res.List:[];
    //  }).catch(err=>{
    //    loading.value = false;
    //  })
  }
  // 保存
  const saveEntranceExamRecords = () => {
    // return new Promise((resolve) => {
    //   let arg = {
    //     url: _this.$urls.SaveEntranceExamRecords,
    //     method: "post",
    //     data: recordsForm,
    //   };
    //   mainLoading.value = false;
    //   _glob.Request(arg).then((res) => {
    //     mainLoading.value = true;
    //     ElMessage({type: "success",message: "保存成功~"});
    //     dlgParams.show = false;
    //     resolve(res);
    //   }).catch((err) => {
    //     mainLoading.value = true;
    //     dlgParams.show = false;
    //   })
    // });
  }


  return (
    <div className="Test">
     21212
    </div>
  );
}

export default Test;
