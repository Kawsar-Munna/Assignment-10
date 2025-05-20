import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import CreateGroup from "./Pages/CreateGroup";
import Login from "./Pages/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-group" element={<CreateGroup />} />  
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
