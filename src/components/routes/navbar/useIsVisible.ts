import axios from "axios";
import { useCallback, useState } from "react";
import { apiUrlData } from "../../../Apis/apis";
import { IsAnime } from "../../Interface/Interface";
import { Events } from "../../Pages/RegistrationAndLoginData/types/Types";
import { useNavigate } from "react-router-dom";

export default function IsVisible() {
  const [showComponent, setShowComponent] = useState(false);
  const [datas, setDatas] = useState<IsAnime[]>([]);
  const [isOnline, setIsOnline] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const token = localStorage.getItem("token");
  //const history = useNavigate();

  const handleSearch = useCallback(async () => {
    setShowComponent(true);
  }, []);

  const handleInputChange = useCallback(async (e: Events) => {
    setShowComponent(e.target.value.trim() !== "");
    setInputValue(e.target.value);
    const data = e.target.value;
    const res = await axios.get(apiUrlData);
    let dataCollection: IsAnime[] = res.data.docs;
    const filterData = dataCollection.filter((dataSearch) =>
      dataSearch.title.toLowerCase().includes(data)
    );
    setDatas(filterData);
  }, []);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
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
    isOnline,
    setIsOnline,
    handleKeyPress,
  };
}
