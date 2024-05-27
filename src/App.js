// src/App.js
import React from "react";
import NavigationBar from "./components/NavigationBar";
import HeroSection from "./components/HeroSection";
import Trending from "./components/Trending";
import Recently from "./components/Recently";
import style from "./my-style.module.scss";

function App() {
  return (
    <>
      <div className={style.HeroSection}>
        <NavigationBar />
        <HeroSection />
      </div>
      <div className={style.TrendingSection}>
        <Trending />
      </div>
      <div className={style.Recently}>
        <Recently />
      </div>
    </>
  );
}

export default App;
