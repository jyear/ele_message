import * as React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/home/";

const CustomRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
      </Routes>
    </HashRouter>
  );
};

export default CustomRoutes;
