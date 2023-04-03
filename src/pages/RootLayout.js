import React from "react";

import DrawerAndBar from "../Layout/DrawerAndBar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RootLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <main>
        <DrawerAndBar />
      </main>
    </>
  );
}

export default RootLayout;
