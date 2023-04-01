import axios from "axios";
import { useEffect, useState } from "react";
import { apiUrlData } from "../../../Apis/apis";
import { IObject } from "../../Interface/interface";
import { Events } from "../RegistrationAndLoginData/types/types";

export default function ListAnimeLogic() {
  const [Search, setSearch] = useState<IObject[]>([]);
  const [filteredSearch, setFilteredSearch] = useState<IObject[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
 
  const handleSubmit = (e: Events) => e.preventDefault();

  useEffect(() => {
    const searchData = async () => {
      const res = await axios.get(apiUrlData, {
        params: { page: currentPage },
      });
      setSearch(res.data.docs);
      setFilteredSearch(res.data.docs);
      setTotalPages(res.data.totalPages);
    };

    searchData();
  }, [currentPage]);
/*
  const dltElemnt = () => {
    if (idx !== undefined) {
      const newList = [...filteredSearch];
      newList.splice(idx, 1);
      setFilteredSearch(newList);
    }
  };
*/
  const filterSearch = (e: Events) => {
    const data = e.target.value;
    e.preventDefault();
    const filterData = Search.filter((dataSearch) =>
      dataSearch.title.toLowerCase().includes(data)
    );
    setFilteredSearch(filterData);
  };

  const next = async () => {
    if (currentPage === totalPages) {
      alert("Last page");
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const prev = async () => {
    if (currentPage === 1) {
      alert("Please click on next");
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  return {
    filterSearch,
    currentPage,
    totalPages,
    filteredSearch,
    prev,
    next,
    handleSubmit,
    setFilteredSearch,
    Search,
  };
}
