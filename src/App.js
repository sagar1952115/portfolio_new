import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Experience from "./pages/experience/Experience";
import Project from "./pages/project/Project";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
