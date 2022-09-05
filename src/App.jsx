import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
import Home from "./pages/Home"
import Allblogs from "./pages/Allblogs"
import Singalblogs from "./pages/Singalblogpage"
import Login from "./pages/Login"
import Blogstandard from "./pages/Blogstandard";
import Casestudies from "./pages/Casestudies";
import Singalcasestudy from "./pages/Singalcasestudy";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/our-blogs" element={<Allblogs/>}/>
        <Route path="/singal-blogpage" element={<Singalblogs/>}/>
        <Route path="/singal-blogpage" element={<Singalblogs/>}/>
        <Route path="/blog-standard"  element={<Blogstandard/>} />
        <Route path="/allcasestudy" element={<Casestudies/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sinagl-case-study" element={<Singalcasestudy/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  );
};

export default App;
