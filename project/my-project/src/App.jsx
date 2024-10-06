import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./components/Nav";

const App = () => {
  return (
    <Router>
      <div className="relative">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
