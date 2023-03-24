import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../../Pages/home/home'
import ListAnime from '../../Pages/listAnime/listAnime'
import Login from '../../Pages/Login/login'
import Registe from "../../Pages/Login/Registe";
import HomeUser from "../../Pages/HomeUser/HomeUser";

function routePage() {
  return (
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/HomeUser" element={<HomeUser />} />
        <Route path="/list" element={<ListAnime />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Registe />} />
      </Routes>
  );
}

export default routePage;
