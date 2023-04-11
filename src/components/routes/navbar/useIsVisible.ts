import axios from "axios";
import { useCallback, useState } from "react";
import { apiUrlData } from "../../../Apis/apis";
import { IsAnime } from "../../Interface/Interface";
import { Events } from "../../Pages/RegistrationAndLoginData/types/Types";
import { useNavigate } from "react-router-dom";
import { KeyboardEvent } from "../../Pages/RegistrationAndLoginData/types/Types";

export default function IsVisible() {
  const [showComponent, setShowComponent] = useState(false);
  const [datas, setDatas] = useState<IsAnime[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [foundData, setFoundData] = useState<IsAnime[]>([]);
  const token = localStorage.getItem("token");
  const history = useNavigate();

  const handleSearch = useCallback(async () => {
    setShowComponent(true);
  }, []);

  const handleInputChange = useCallback(async (e: Events) => {
    setShowComponent(e.target.value.trim() !== "");
    setInputValue(e.target.value);
    const data = e.target.value;
    const res = await axios.get(apiUrlData, { params: { limit: 100 } });
    let dataCollection: IsAnime[] = res.data.docs;
    const filterData = dataCollection.filter((dataSearch) =>
      dataSearch.title.toLowerCase().includes(data)
    );
    setDatas(filterData);
  }, []);

  const handleKeyDonw = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      if (datas.length === 1) {
        datas.map((anime) => {
          history(`${anime._id}`);
          setInputValue("");
          setShowComponent(false);
        });
      } else if (datas.length > 1) {
        setFoundData(datas);
        history(`/found`, { state: { data: datas } });
        setInputValue("");
        setShowComponent(false);
      } else {
        history(`/Pagenotfound`);
        setInputValue("");
        setShowComponent(false);
      }
    }
  };

  return {
    setShowComponent,
    showComponent,
    handleSearch,
    handleInputChange,
    datas,
    inputValue,
    setInputValue,
    token,
    handleKeyDonw,
    foundData,
    setFoundData,
  };
}
