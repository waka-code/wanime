import axios from "axios";
import { useState } from "react";
import { UpdateDate } from "../../../../../Apis/apis";
import { htmlElement } from "../../../RegistrationAndLoginData/types/types";

export default function UpdateAnimeLogic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("");
  const [img, setImg] = useState("");
  const [video, setVideo] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function captureId(id: string | undefined) {
    if (id !== undefined) localStorage.setItem("userID", id);
  }

  function handleSubmitReserch(event: htmlElement) {
    event.preventDefault();
  }

  const handleSubmits = async () => {
    const userID = localStorage.getItem("userID");
    try {
      await axios.put(`${UpdateDate}/${userID}`, {
        title,
        description,
        gender,
        img,
        video,
      });
      console.log("cambio");
      setTitle("");
      setDescription("");
      setGender("");
      setImg("");
      setVideo("");
      localStorage.removeItem("userID");
    } catch {
      setErrorMessage("Data no Guardada");
    }
  };
  return {
    setTitle,
    setDescription,
    setGender,
    setImg,
    setVideo,
    errorMessage,
    handleSubmits,
    handleSubmitReserch,
    captureId,
  };
}
