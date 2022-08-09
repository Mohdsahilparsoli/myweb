import "./App.css";
import About from "./components/Company/Aboutus/Aboutus";
import Awords from "./components/Company/awardsandRecogntion/Awards";
import Carrers from "./components/Company/careers/Carrers";
import Customerrating from "./components/Company/customer-reviews/Customer";
import Help from "./components/Company/helpandfaqs/Help";
import Howwork from "./components/Company/Howwork/Howwork";
import Leadership from "./components/Company/leadershipteam/Leadership";
import Galery from "./components/Company/ougallery/Ourgalery";
import Locaton from "./components/Company/ourloaction/Ourloaction";
import Package from "./components/Company/packageandparicing/Package";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Businessecurity from "./components/Services/Businesssecurity/Businessecurity";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company/about" element={<About />} />
        <Route path="/company/carrers" element={<Carrers />} />
        <Route path="/company/awords" element={<Awords />} />
        <Route path="/company/customerrating" element={<Customerrating />} />
        <Route path="/company/help" element={<Help />} />
        <Route path="/company/companywork" element={<Howwork />} />
        <Route path="/company/leadership" element={<Leadership />} />
        <Route path="/company/galery" element={<Galery />} />
        <Route path="/company/location" element={<Locaton />} />
        <Route path="/company/package" element={<Package />} />
        <Route path="/services/businesssecurity" element={<Businessecurity/>}/>
      </Routes>
    </>
  );
};

export default App;
