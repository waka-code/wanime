import axios from "axios";
import { useCallback, useState } from "react";
import { UpdateDate } from "../../../../../Apis/apis";
import { htmlElement } from "../../../RegistrationAndLoginData/types/Types";

export default function UpdateAnimeLogic() {
  const [title, setTitle] = useState("Title");
  const [description, setDescription] = useState("Description");
  const [gender, setGender] = useState("Gender");
  const [img, setImg] = useState("Img");
  const [video, setVideo] = useState("Video");
  const [errorMessage, setErrorMessage] = useState("");

  const captureId = useCallback((id: string | undefined) => {
    if (id !== undefined) localStorage.setItem("userID", id);
  }, []);

  function avoidRefills(event: htmlElement) {
    event.preventDefault();
  }

  const handleSubmits = useCallback(async () => {
    const userID = localStorage.getItem("userID");
    try {
      const res = await axios.put(`${UpdateDate}/${userID}`, {
        title,
        description,
        gender,
        img,
        video,
      });
      if (res) {
        setTitle("");
        setDescription("");
        setGender("");
        setImg("");
        setVideo("");
        setErrorMessage("Cambios Realizados");
        localStorage.removeItem("userID");
      }
    } catch {
      setErrorMessage("Data no Guardada");
    }
  }, [title, description, gender, img, video]);

  return {
    setTitle,
    setDescription,
    setGender,
    setImg,
    setVideo,
    errorMessage,
    handleSubmits,
    avoidRefills,
    captureId,
    title,
    description,
    gender,
    img,
    video,
  };
}

