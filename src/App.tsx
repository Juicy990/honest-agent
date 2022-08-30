import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { CompanyPage } from "./pages/companyPage/CompanyPage";
import { MainPage } from "./pages/mainPage/MainPage";
import { ListPage } from "./pages/listPage/ListPage";
import { LoginPage } from "./pages/loginPage/LoginPage";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  return (
    <BrowserRouter>
      <div className="app">
        <div className="app-content">
          <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

          <Routes>
            <Route
              path="/login"
              element={
                !loggedIn ? (
                  <LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
                ) : (
                  <Navigate replace to="/" />
                )
              }
            />
            <Route
              path="/"
              element={
                loggedIn ? <MainPage /> : <Navigate replace to="/login" />
              }
            />

            <Route path="/companies" element={<ListPage />} />
            <Route path="/companies/:id" element={<CompanyPage />} />
          </Routes>
        </div>

        <div className="app-footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
