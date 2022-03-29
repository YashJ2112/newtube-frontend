import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Post from "./components/upload/Post";
import Edit from "./components/upload/Edit";
import Create from "./components/upload/Create";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className={"container"}>
        <Switch>
          <Route path={"/"} element={<Home />} />
          <Route path={"/post/:uploadId"} element={<Post />} />
          <Route path={"/edit/:uploadId"} element={<Edit />} />
          <Route path={"/create"} element={<Create />} />
        </Switch>
      </div>
    </div>
  );
}
export default App;
