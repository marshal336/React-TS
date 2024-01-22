import React from "react";
import Layout from "./pages/Layout/layout";
import Home from "./pages/Home/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Favorite from "./pages/Favorites";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout children={<Home />} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
