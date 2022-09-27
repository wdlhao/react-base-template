// 工商联会员信息
import { useQuery } from "@tanstack/react-query";
import {fetchData } from "./utils/api";
import { initialData } from "./utils/initialData";

const useGSLHYXX = (params) => {
  return useQuery(
    ["useGSLHYXX_enterprise", params],
    () => fetchData(params),
    {
      initialData: initialData,
    }
  );
};

export default useGSLHYXX;
