import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product";
import Errorpage from "./components/Errorpage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path={"/"} element={<Home />}></Route>
      <Route path={"/about"} element={<About />}></Route>
      <Route path={"/contact"} element={<Contact />}></Route>
      <Route path={"/product"} element={<Product/>}></Route>
      <Route path={"*"} element={<Errorpage/>}></Route>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
