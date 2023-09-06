import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";

function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <Main />
    </div>
  );
}

export default Home;
