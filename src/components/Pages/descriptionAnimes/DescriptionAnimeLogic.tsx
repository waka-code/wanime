import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiUrlData } from "../../../Apis/apis";
import { IObject } from "../../Interface/interface";

export default function DescriptionAnimeLogic() {
  const { _id } = useParams();
  const [animesDescript, setAnimesDescript] = useState<IObject>();

  useEffect(() => {
    const searchData = async () => {
      const res = await axios.get(`${apiUrlData}/${_id}`);
      setAnimesDescript(res.data);
      console.log(res.data.docs);
    };

    searchData();
  }, [_id]);
  return { animesDescript };
}
