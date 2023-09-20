import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <nav>
        {/* <a><Link to={<Home />}>Home</Link></a>
        <a><Link to={<About />}>About</Link></a> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/About" element={<About />}>
          About
        </Route>
      </Routes>
    </div>
  );
}

export default App;
