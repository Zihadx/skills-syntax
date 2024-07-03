// import { Outlet } from "react-router-dom";
import Navbar from "../ui/share/Navbar/Navbar";
import Footer from "../ui/share/Footer/Footer";
import Hero from "../ui/Home/Hero/Hero";

const Main = () => {
    const navItems = [
        { name: "Home", link: "#home" },
        { name: "Products", link: "#products" },
        { name: "Resources", link: "#resources" },
        { name: "Pricing", link: "#pricing" },
      ];
    return (
        <div className="overflow-hidden">
            <Navbar navItems={navItems}/>
            <Hero/>
            <Footer/>
        </div>
    );
};

export default Main;