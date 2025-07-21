import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Home from "../../Pages/Home";
import { useEffect } from "react";
import useAuth from "../../context/Auth";
import axios from "axios";
import AppBar from "../AppBar";

function Layout() {
  const location = useLocation();
  const { auth, AuthSet } = useAuth();

  axios.defaults.headers.common["Authorization"] = auth?.token;

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parsedData = JSON.parse(data);
      console.log(parsedData);
      AuthSet(parsedData.user, parsedData.token);
    }
  }, []);

  return (
    <>
      <AppBar />

      {location.pathname == "/" ? <Home /> : <Outlet />}

      <Footer />
    </>
  );
}

export default Layout;
