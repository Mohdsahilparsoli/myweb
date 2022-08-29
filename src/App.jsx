import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Allblogs from "./Pages/Allblogs";
import Singalblogpage from "./Pages/Singalblogpage";
import Login from "./Pages/Login";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-blogs" element={<Allblogs />} />
        <Route path="/singal-blog" element={<Singalblogpage />} />
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
};

export default App;
