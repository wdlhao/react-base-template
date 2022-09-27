import React from "react";
import "./test.css";
import useQYHYJBXX from "@/hooks/useQYHYJBXX"; // get
import useGSLHYXX from "@/hooks/useGSLHYXX";   // post

export default function Test() {
  let id = 49223;
  let GSLHParams = {
    page:1,
    pagesize: 10,
    id:id,
    keyword:"",
  }
  const { data: basicData } = useQYHYJBXX(id); // GET
  const { data: basicList } = useGSLHYXX(GSLHParams); // POST

  return (
    <>
      <div className="TestBox">
        <div className="dataBox">
          <span className="getTitle">GET请求数据成功~</span>
          { Object.keys(basicData).map((item,index) => {
            return (
              <div className="eleBox" key={index}>
                <p> {item}: </p> 
                <p> {JSON.stringify(basicData[item])} </p>
              </div>
            );
          })
          }
        </div>
        <div className="dataBox">
          <span className="getTitle">POST请求数据成功~</span>
          { Object.keys(basicList).map((item,index) => {
            return (
              <div className="eleBox" key={index}>
                <p> {item}: </p> 
                <p> {JSON.stringify(basicList[item])} </p>
              </div>
            );
          })
          }
        </div>
      
      </div>
    </>
  );
}
