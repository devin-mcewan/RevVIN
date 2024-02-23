import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Results from "./components/Results/Results";
import Page1 from "./components/Page1/Page1";
import Page2 from "./components/Page2/Page2";
import Page3 from "./components/Page3/Page3";
import Loading from "./components/Loading/Loading";

function App() {
  return (
    <div className="App">
      <nav>
        <h1>revVIN</h1>
        <ul>
          <li>
            <Link to="/RevVIN">HOME</Link>
          </li>
          <li>
            <Link to="/About">ABOUT</Link>
          </li>
        </ul>
      </nav>
      <Home></Home>
      <Routes>
        <Route path="/RevVIN" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Results/:page" element={<Results />}></Route>
        <Route path="Loading" element={<Loading />}></Route>
      </Routes>
    </div>
  );
}

export default App;
