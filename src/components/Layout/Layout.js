import React, { Fragment } from "react";
import Navbar from '../Nav/Navbar';
import { Outlet } from "react-router";

const Layout = () =>{
return (
<Fragment>
    <Navbar/>
    <main>
        <Outlet/>
    </main>
    <Footer/>
</Fragment>

)
}






export default Layout;