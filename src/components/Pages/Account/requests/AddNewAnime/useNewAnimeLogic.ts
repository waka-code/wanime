import axios from "axios";
import { useCallback, useState } from "react";
import { apiUrlData } from "../../../../../Apis/apis";
import { htmlElement } from "../../../RegistrationAndLoginData/types/Types";

export default function NewAnimeLogic() {
  const [title, setTitle] = useState("Title");
  const [description, setDescription] = useState("Description");
  const [gender, setGender] = useState("Gender");
  const [img, setImg] = useState("Img");
  const [video, setVideo] = useState("Video");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = useCallback(
    async (event: htmlElement) => {
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
    },
    [title, description, gender, img, video]
  );
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
