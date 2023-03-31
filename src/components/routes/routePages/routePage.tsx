import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../../Pages/home/home'
import ListAnime from '../../Pages/listAnime/listAnime'
import Login from '../../Pages/RegistrationAndLoginData/Login/login'
import Register from "../../Pages/RegistrationAndLoginData/Register/Register";
import DescriptionAnimes from "../../Pages/DescriptionAnimes/DescriptionAnimes";
import Account from "../../Pages/Account/Account";
import NewAnime from "../../Pages/Account/requests/AddNewAnime/NewAnime";
import ViewAnime from "../../Pages/Account/requests/ListOfAnime/ViewAnime";
import ViewUser from "../../Pages/Account/requests/ListOfUser/ViewUser";

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
        <Route path="/HomeUser/Post" element={<NewAnime />} />
        <Route path="/HomeUser/GetAnime" element={<ViewAnime />} />
        <Route path="/HomeUser/GetUser" element={<ViewUser />} />
      </Routes>
  );
}
