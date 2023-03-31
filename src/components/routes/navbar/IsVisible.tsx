import axios from "axios";
import {  useState } from "react";
import { apiUrlData } from "../../../Apis/apis";
import { IObject } from "../../Interface/interface";
import { Events } from "../../Pages/RegistrationAndLoginData/types/types";

export default function IsVisible() {
  const [showComponent, setShowComponent] = useState(false);
  const [datass, setDatass] = useState<IObject[]>([]);
  const token = localStorage.getItem("token");
  
  const handleSearch = async () => {
    setShowComponent(true);
  };

  const handleInputChange = async (e: Events) => {
    setShowComponent(e.target.value.trim() !== "");
    const data = e.target.value;
    const res = await axios.get(apiUrlData);
    let datas: IObject[] = res.data.docs;
    const filterData = datas.filter((dataSearch) =>
      dataSearch.title.toLowerCase().includes(data)
    );
    setDatass(filterData);
    console.log(filterData);
  };


  return {
    setShowComponent,
    showComponent,
    handleSearch,
    handleInputChange,
    datass,
    token
  };
}
