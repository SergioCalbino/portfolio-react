import { Route, Routes } from "react-router-dom";
// import "./App.css";
import AboutMe from "./components/AboutMe";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Proyectos from "./components/Proyectos";

function App() {
  return (
    <div className="container mt-3">
    <Header/>
      <Routes>
        <Route  path="/" element={<AboutMe />} />
        <Route  path="/" element={<Proyectos/> } />
        {/* <Route exact path="/"  element={<Certificates/>}/> */}
      </Routes>
      {/* <Certificates/> */}
    <Footer/>  
    </div>
  );
}

export default App;
