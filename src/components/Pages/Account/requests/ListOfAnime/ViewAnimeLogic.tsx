import axios from "axios";
import { dltData } from "../../../../../Apis/apis";
import ListAnimeLogic from "../../../listAnime/ListAnimeLogic";

function ViewAnimeLogic() {
  const { setFilteredSearch, filteredSearch } = ListAnimeLogic();

  const handleSubmit = async (idAnime: string | undefined) => {
    setFilteredSearch(filteredSearch.filter((dltID) => dltID._id !== idAnime));

    try {
      await axios.delete(`${dltData}${idAnime}`);
      console.log("eliminado");
    } catch {
      console.log("no se elimino el elemento");
    }
  };

  return { handleSubmit };
}

export default ViewAnimeLogic;
