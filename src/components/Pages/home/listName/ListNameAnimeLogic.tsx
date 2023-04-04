import React, { useEffect, useState } from "react";
import { IsAnime } from "../../../Interface/Interface";
import AxiosApi from "../../../../Apis/AxiosApi";

export default function ListNameAnimeLogic() {
  const [animeData, setAnimeData] = useState<IsAnime[]>([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const { dataName } = AxiosApi();

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(event.target.value);
  };

  useEffect(() => {
    const datosFiltrados = dataName.filter((dato) =>
      dato.gender.toLowerCase().includes(selectedGenre.toLowerCase())
    );
    setAnimeData(datosFiltrados);
  }, [selectedGenre, dataName]);

  return { selectedGenre, handleGenreChange, animeData };
}
