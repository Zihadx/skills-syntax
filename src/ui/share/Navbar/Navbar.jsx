import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { MdMenu, MdClose } from "react-icons/md"; 
import { cn } from "../../../utils/cn";
import { Link} from "react-router-dom";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); 

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className={cn(
            "flex w-full fixed top-5 inset-x-0 mx-auto rounded-md shadow-lg z-[5000] px-8 py-2 items-center justify-between space-x-4 backdrop-blur-lg"
          )}
        >
          <div>
            <h1 className="text-3xl font-bold">
              Sk
              <span className="text-[#7F6EFC]">i</span>
              ll Sy
              <span className="text-[#7F6EFC]">n</span>
              tax
            </h1>
          </div>
          {/* -----------large screen---------- */}
          <div className="hidden md:flex justify-center items-center gap-4">
            <Link to="/">Home</Link>
            <Link to="/">Products</Link>
            <Link to="/">Resources</Link>
            <Link to="/">Pricing</Link>
          </div>
          <div className="hidden md:flex justify-end items-center gap-2">
            <button className="border border-[#6941C6] text-sm font-medium relative text-[#6941C6] px-4 py-1 rounded-md bg-[#E9D7FE]">
              <span>Login</span>
            </button>
            <button className="border text-sm font-medium relative text-white px-4 py-1 rounded-md bg-[#7F56D9]">
              <span>Sign up</span>
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="text-[#7F6EFC] focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <MdClose className="w-6 h-6" />
              ) : (
                <MdMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* --------------Mobile screen ----------------*/}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-[70px] inset-x-0 mx-auto rounded-md shadow-lg z-[5000] px-8 py-2 bg-white"
          >
            <div className="flex flex-col gap-4">
              <p className="text-center">Home</p>
              <p className="text-center">Products</p>
              <p className="text-center">Resources</p>
              <p className="text-center">Pricing</p>
            </div>
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-2 mt-4">
              <button className="border border-[#6941C6] text-sm font-medium relative text-[#6941C6] px-4 py-1 rounded-md bg-[#E9D7FE]">
                <span>Login</span>
              </button>
              <button className="border text-sm font-medium relative text-white px-4 py-1 rounded-md bg-[#7F56D9]">
                <span>Sign up</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
