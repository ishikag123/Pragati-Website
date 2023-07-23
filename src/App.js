import "./App.css";

import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Gallery } from "./Components/Gallery";
import { Festivals } from "./Components/Festivals";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/festivals" element={<Festivals />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
