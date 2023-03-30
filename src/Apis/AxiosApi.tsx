import React, { useEffect, useState } from "react";
import axios from "axios";
import { IObject } from "../components/Interface/interface";
import { apiUrlData } from "./apis";

function AxiosApi() {
  const [dataName, setDataName] = useState<IObject[]>([]);
  const callData = async () => {
    const res = await axios.get(apiUrlData);
    setDataName(res.data.docs);
  };
  useEffect(() => {
    callData();
  }, []);

  return { dataName };
}

export default AxiosApi;
