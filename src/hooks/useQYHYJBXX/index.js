// 企业会员基本信息
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./utils/api";
import initialData from "./utils/initialData";

const useQYHYJBXX = (id) => {
  return useQuery(["useQYHYJBXX", id], () => fetchData({ id }), {
    // enabled: !!id,
    initialData,
  });
};

export default useQYHYJBXX;
