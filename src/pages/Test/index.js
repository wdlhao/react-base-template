import React from "react";
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
  const { data: basicData } = useQYHYJBXX(id);
  const { data: basicList } = useGSLHYXX(GSLHParams);
  // console.log('test---basicData----',basicData);
  // console.log('test---basicList----',basicList);

  return (
    <div className="Test">
     21212
    </div>
  );
}
