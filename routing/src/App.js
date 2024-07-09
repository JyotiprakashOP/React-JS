import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product";
import Errorpage from "./components/Errorpage";
import Navbar from "./components/Navbar";
import ChildService from "./components/ChildService";
import ChildSubscription from "./components/ChildSubscription";
import ChildWebsite from "./components/ChildWebsite";
import Login from "./components/Login";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path={"/"} element={<Home />}></Route>
      <Route path={"/about"} element={<About />}>
          <Route path="childservice" element={<ChildService/>}></Route>
          <Route path="childwebsite" element={<ChildWebsite/>}></Route>
          <Route path="childsubscription" element={<ChildSubscription/>}></Route>
      </Route>
      <Route path={"/contact"} element={<Contact />}></Route>
      <Route path={"/product"} element={<Product/>}></Route>
      <Route path={"*"} element={<Errorpage/>}></Route>

    </Routes>
    <Login/>
    </BrowserRouter>
    </>
  );
}

export default App;
