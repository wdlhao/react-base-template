import React from "react";
import { format1 } from "./format";

const fetchData = (
  params
) => {
  return new Promise((resolve, reject) => {
    const { page,pagesize } = params
    React.Request({
      url:`${React.Urls.org_enterprise_member}?page=${page}&pagesize=${pagesize}`,
      method:"post",
      data:params
    })
    .then((result) => {
      resolve(format1(result));
    });
  });
};

export { fetchData };
