import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Analyze from "./pages/Analyze";
import HowItWorks from "./pages/HowItWorks";
import Resources from "./pages/Resources";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analyze" element={<Analyze/>}/>
        <Route path="/how-it-works" element={<HowItWorks/>}/>
        <Route path="/resources" element={<Resources/>}/>

        {/* other routes */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
