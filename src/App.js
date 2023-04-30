import { Fragment, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbars from "./components/Nav/Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Department1 from "./Departments/Department1";
import Department2 from "./Departments/Department2";
import Department3 from "./Departments/Department3";
import Department4 from "./Departments/Department4";
import Department5 from "./Departments/Department5";
import Department6 from "./Departments/Department6";
import Department7 from "./Departments/Department7";
import DefaultDepartMent from "./Departments/DefaultDepartMent";

function App() {
  
  return (
    <Fragment>
      <Navbars />
      <Home />

      <DefaultDepartMent/>
      {/* <Department1 /> */}
      <Department2 />
      <Department3 />
      <Department4 />
      <Department5 />
      <Department6 />
      <Department7 />

      <Banner />
      <Footer />
      <Contact />
    </Fragment>
  );
}

export default App;
