
import './App.css'
import Hero from './ui/Home/Hero/Hero'
import Footer from './ui/share/Footer/Footer'
import Navbar from './ui/share/Navbar/Navbar'

function App() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Products", link: "#products" },
    { name: "Resources", link: "#resources" },
    { name: "Pricing", link: "#pricing" },
  ];

  return (
    <>
      <div>
       <Navbar navItems={navItems}/>
       <Hero/>
       <Footer/>
      </div>
    </>
  )
}

export default App
