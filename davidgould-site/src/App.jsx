import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import SIKERR from "./pages/SIKERR";
import Simulator from "./pages/Simulator";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div
      style={{
        background: "#0f172a",
        color: "#e2e8f0",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sikerr" element={<SIKERR />} />
        <Route path="/simulator" element={<Simulator />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}