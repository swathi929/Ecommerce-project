import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Components/Home";
import Delight from "./Components/Delight";
import Menu from "./Components/Menu";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Pagenotfound from "./Components/Pagenotfound";
import Nav from "./Nav"




function App() {
  return (
     <BrowserRouter>
        <Nav path="/nav" element={<Nav/>}/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/delight" element={<Delight/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Pagenotfound/>}/>
        </Routes>
     </BrowserRouter>
  );
}


export default App;
