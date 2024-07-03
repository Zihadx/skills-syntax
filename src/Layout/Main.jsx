import { Outlet } from "react-router-dom";
import Navbar from "../ui/share/Navbar/Navbar";
import Footer from "../ui/share/Footer/Footer";
import Hero from "../ui/Home/Hero/Hero";

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Hero/>
            <Footer/>
        </div>
    );
};

export default Main;