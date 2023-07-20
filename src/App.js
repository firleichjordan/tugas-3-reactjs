import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import './App.css';
import About from "./pages/About";
import Service from "./pages/Service";
import Notofound from "./pages/Notfound";

function App() {

  

  return (
    <div className="app">
      <div >
        <Router>
          <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/about" element={<About /> } />
            <Route path="/service" element={<Service /> } />
            <Route path="*" element={<Notofound /> } />
          </Routes>
        </Router>
        
      </div>
    </div>
  );
}

export default App;
