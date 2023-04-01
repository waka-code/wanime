import axios from "axios";
import React, { useState } from "react";
import { apiUrlData } from "../../../../../Apis/apis";
import { htmlElement } from "../../../RegistrationAndLoginData/types/types";

export default function NewAnimeLogic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("");
  const [img, setImg] = useState("");
  const [video, setVideo] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: htmlElement) => {
    event.preventDefault();

    try {
      const res = await axios.post(apiUrlData, {
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
        setErrorMessage("Guardado");
      }
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
    handleSubmit,
    title,
    description,
    gender,
    img,
    video,
  };
}
