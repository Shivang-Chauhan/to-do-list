import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoWrapperLocalStorage from "./screens/TodoWrapperLocalStorage";
import Protected from "./screens/Protected";
import React from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Protected Component={Home} />} />
          <Route
            path="/to-do"
            element={<Protected Component={TodoWrapperLocalStorage} />}
          />
          {/* <Route path="*" element={{Error 404}}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
