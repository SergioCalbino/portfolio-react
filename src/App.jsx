import { Route, Routes } from "react-router-dom";
// import "./App.css";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Proyectos from "./components/Proyectos";

function App() {
  return (
    <div className="container mt-3">
    <Header/>
      <Routes>
        <Route exact path="/" element={<AboutMe />} />
        <Route exact path="/" element={<Proyectos/> } />
      </Routes>
    <Footer/>  
    </div>
  );
}

export default App;
