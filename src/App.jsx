import Home from "./pages/Home";
import About from "./pages/About";
import Classes from "./pages/Classes";
import ClassesInfo from "./pages/ClassesInfo";
import Locations from "./pages/Locations";
import LocationsInfo from "./pages/LocationsInfo";
import Bosses from "./pages/Bosses";
import BossesInfo from "./pages/BossesInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="classes" element={<Classes />} />
          <Route path="classes/:id" element={<ClassesInfo />} />
          <Route path="locations" element={<Locations />} />
          <Route path="locations/:id" element={<LocationsInfo />} />
          <Route path="Bosses" element={<Bosses />} />
          <Route path="Bosses/:id" element={<BossesInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
