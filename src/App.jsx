import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
import Home from "./pages/Home"
import Allblogs from "./pages/Allblogs"
// import Singalblogs from "./pages/Mainproductpage"
import Login from "./pages/Login"
import Blogstandard from "./pages/Blogstandard";
import Casestudies from "./pages/Casestudies";
import Singalcasestudy from "./pages/Singalcasestudy";
import Contact from "./pages/Contact";
import Shoppage from "./pages/Shoppage";
import Mainproductpage from "./pages/Mainproductpage";
import Singalblogpage from "./pages/Singalblogpage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/our-blogs" element={<Allblogs/>}/>
        <Route path="/singal-blogpage" element={<Singalblogpage/>}/>
        <Route path="/blog-standard"  element={<Blogstandard/>} />
        <Route path="/allcasestudy" element={<Casestudies/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sinagl-case-study" element={<Singalcasestudy/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/products" element={<Shoppage/>} />
        <Route path="/singalproduct" element={<Mainproductpage/>} />
      
      </Routes>
    </>
  );
};

export default App;
