import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/home/Home";
import ListAnime from "../../Pages/listAnime/ListAnime";
import Login from "../../Pages/RegistrationAndLoginData/Login/Login";
import Register from "../../Pages/RegistrationAndLoginData/Register/Register";
import DescriptionAnimes from "../../Pages/DescriptionAnimes/DescriptionAnimes";
import Account from "../../Pages/Account/Account";
import NewAnime from "../../Pages/Account/requests/AddNewAnime/NewAnime";
import ViewAnime from "../../Pages/Account/requests/ListOfAnime/ViewAnime";
import UpdateAnime from "../../Pages/Account/requests/UpdateAnime/UpdateAnime";
import {NotFoundPage} from "../../Pages/NotFound"
export default function RoutePage() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/*" element={<Home />} />
      <Route path="/HomeUser" element={<Account />} />
      <Route path="/list" element={<ListAnime />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/:_id" element={<DescriptionAnimes />} />
      <Route path="/name/:title" element={<DescriptionAnimes />} />
      <Route path="/HomeUser/Post" element={<NewAnime />} />
      <Route path="/HomeUser/GetAnime" element={<ViewAnime />} />
      <Route path="/HomeUser/Update" element={<UpdateAnime />} />
      <Route path="/Pagenotfound" element={<NotFoundPage />} />
    </Routes>
  );
}
