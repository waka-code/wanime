import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../../Pages/home/home'
import ListAnime from '../../Pages/listAnime/listAnime'
import Login from '../../Pages/RegistrationAndLoginData/Login/login'
import Register from "../../Pages/RegistrationAndLoginData/Register/Register";
import HomeUser from "../../Pages/HomeUser/HomeUser";
import DescriptionAnimes from "../../Pages/DescriptionAnimes/DescriptionAnimes";

function routePage() {
  return (
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route path="/HomeUser" element={<HomeUser />} />
        <Route path="/list" element={<ListAnime />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/:_id" element={<DescriptionAnimes />} />
      </Routes>
  );
}

export default routePage;
