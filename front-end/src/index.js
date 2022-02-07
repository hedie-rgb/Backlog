import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dummy1 from "./components/Dummy1";
import Dummy2 from "./components/Dummy2";
import Dummy3 from "./components/Dummy3";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Home";
import TestCaseLog from "./components/TestCaseLog";
import Create from "./components/Create";
import Delete from "./components/Delete";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dummy1" element={<Dummy1 />} />
      <Route path="/dummy2" element={<Dummy2 />} />
      <Route path="/dummy3" element={<Dummy3 />} />
      <Route path="/testcase" element={<TestCaseLog />} />
      <Route path="/testcase/create" element={<Create />} />
      <Route path="/testcase/delete" element={<Delete />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
