import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { apiUrlData } from "../../../Apis/apis";
import { IsAnime } from "../../Interface/Interface";
import { Events } from "../RegistrationAndLoginData/types/Types";
import { useNavigate } from "react-router-dom";

export default function ListAnimeLogic() {
  const [Search, setSearch] = useState<IsAnime[]>([]);
  const [filterByAnimeName, setFilterByAnimeName] = useState<IsAnime[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const handleSubmit = useCallback((e: Events) => e.preventDefault(), []);

  useEffect(() => {
    const searchData = async () => {
      const res = await axios.get(apiUrlData, {
        params: { page: currentPage },
      });
      const { docs, totalPages } = res.data;
      setSearch(docs);
      setFilterByAnimeName(docs);
      setTotalPages(totalPages);
    };

    searchData();
  }, [currentPage]);



  const filterSearch = useCallback(
    (e: Events) => {
      const data = e.target.value;
      e.preventDefault();
      const filterData = Search.filter((dataSearch) =>
        dataSearch.title.toLowerCase().includes(data.toLowerCase())
      );
      setFilterByAnimeName(filterData);
    },
    [Search, setFilterByAnimeName]
  );

  const next = useCallback(async () => {
    if (currentPage === totalPages) {
      alert("Last page");
    } else {
      setCurrentPage(currentPage + 1);
    }
  }, [currentPage, totalPages]);

  const prev = useCallback(async () => {
    if (currentPage === 1) {
      alert("Please click on next");
    } else {
      setCurrentPage(currentPage - 1);
    }
  }, [currentPage]);

  return {
    filterSearch,
    currentPage,
    totalPages,
    filterByAnimeName,
    prev,
    next,
    handleSubmit,
    setFilterByAnimeName,
  };
}
