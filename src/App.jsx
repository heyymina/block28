import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Blue, Home, Red, Navigation } from "./components";

function App() {
  return (
    <div id="container">
      <Navigation />
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;