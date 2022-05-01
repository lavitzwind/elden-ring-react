import Home from "./pages/Home";
import About from "./pages/About";
import Classes from "./pages/Classes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
