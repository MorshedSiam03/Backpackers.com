import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import ScrollToTop from "../Pages/ScrollToTop";

const Root = () => {
    ScrollToTop();
    return (
        <div className="container  mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;