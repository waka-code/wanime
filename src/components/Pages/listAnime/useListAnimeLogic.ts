import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { apiUrlData } from "../../../Apis/apis";
import { IsAnime } from "../../Interface/Interface";
import { Events, SelectEvent } from "../RegistrationAndLoginData/types/Types";
import { useNavigate } from "react-router-dom";

export default function ListAnimeLogic() {
  const [Search, setSearch] = useState<IsAnime[]>([]);
  const [filterByAnimeName, setFilterByAnimeName] = useState<IsAnime[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState("");
  const handleSubmit = useCallback((e: Events) => e.preventDefault(), []);
  const history = useNavigate();

  const handleGenreChange = (event: SelectEvent) => {
    setSelectedGenre(event.target.value);
  };

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

    setFilterByAnimeName(
      Search.filter((dataSearch) =>
        dataSearch.gender.toLowerCase().includes(selectedGenre.toLowerCase())
      )
    );
    
    if (currentPage && Search) {
      searchData();
    }
  }, [currentPage, selectedGenre, Search]);

  const next = useCallback(async () => {
    if (currentPage === totalPages) {
      return history(`/list`);
    } else {
      setCurrentPage(currentPage + 1);
    }
  }, [currentPage, totalPages, history]);

  const prev = useCallback(async () => {
    if (currentPage === 1) {
      return history(`/list`);
    } else {
      setCurrentPage(currentPage - 1);
    }
  }, [currentPage, history]);

  return {
    currentPage,
    totalPages,
    filterByAnimeName,
    prev,
    next,
    handleSubmit,
    setFilterByAnimeName,
    selectedGenre,
    handleGenreChange,
  };
}
