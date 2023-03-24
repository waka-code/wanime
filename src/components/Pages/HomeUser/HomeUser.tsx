import React, { useEffect, useState } from "react";
import "./HomeUser.css";

function HomeUser() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      // Si el usuario tiene un token de autenticación, establecer isLoggedIn en true
      setIsLoggedIn(true);
    }
  }, []);

  function logout() {
    // Eliminar el token de autenticación del almacenamiento local del navegador
    localStorage.removeItem("token");
  }
  return <div className="homeUsercss">
    {
        isLoggedIn
    }
    <button onClick={logout}>cerrar</button>
  </div>;
}


export default HomeUser;

