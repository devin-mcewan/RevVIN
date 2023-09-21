import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
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
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/About'>ABOUT</Link></li>
          </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/About" element={<About />}>
          About
        </Route>
        <Route path="/Page1" element={<Page1 />}>
          Page-1
        </Route>
        <Route path="/Page2" element={<Page2 />}>
          Page-2
        </Route>
        <Route path="/Page3" element={<Page3 />}>
          Page-3
        </Route>
        <Route path="Loading" element={<Loading />}>
          Loading
        </Route>
      </Routes>
    </div>
  );
}

export default App;
