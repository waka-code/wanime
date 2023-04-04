import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { IsAnime } from "../components/Interface/Interface";
import { apiUrlData } from "./apis";

function AxiosApi() {
  const [dataName, setDataName] = useState<IsAnime[]>([]);
  const callData = useCallback(async () => {
    const res = await axios.get(apiUrlData);
    setDataName(res.data.docs);
  },[]);
  
  useEffect(() => {
    callData();
  }, [callData]);

  return { dataName };
}

export default AxiosApi;
