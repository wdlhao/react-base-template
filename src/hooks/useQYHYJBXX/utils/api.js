import React from "react";
import { format1 } from "./format";

const fetchData = ({ id = 49223 }) => {
  return new Promise((resolve, reject) => {
    React.Request({
      url:React.Urls.enterprise_member_info,
      method:"get",
      data:{
        id:id
      }
    })
    .then((result) => {
      resolve(format1(result));
    });
  });
};

export { fetchData };
