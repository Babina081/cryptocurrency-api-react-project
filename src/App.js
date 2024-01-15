import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import {
  Navbar,
  HomePage,
  // Exchanges,
  CryptoDetails,
  Cryptocurrencies,
  // News,
  Footer,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar></Navbar>
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<HomePage />}></Route>
              {/* <Route exact path="/exchanges" element={<Exchanges />}></Route> */}
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              ></Route>
              <Route
                exact
                path="/crypto/:coinId"
                element={<CryptoDetails />}
              ></Route>
              {/* <Route exact path="/news" element={<News />}></Route> */}
            </Routes>
          </div>
        </Layout>

        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
