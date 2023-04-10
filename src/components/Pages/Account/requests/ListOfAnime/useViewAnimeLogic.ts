import axios from "axios";
import { dltData } from "../../../../../Apis/apis";
import { useCallback } from "react";

function ViewAnimeLogic() {
  const handleSubmit = useCallback(async (idAnime: string | undefined) => {
    try {
      await axios.delete(`${dltData}${idAnime}`);
    } catch {
      console.log("no se elimino el elemento");
    }
  }, []);
  return { handleSubmit };
}

export default ViewAnimeLogic;
