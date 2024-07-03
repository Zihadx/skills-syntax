import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../../utils/cn";
const Navbar = () => {
    const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

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
          <div className="md:flex justify-center items-center gap-4">
            <p>Home</p>
            <p>Products</p>
            <p>Resources</p>
            <p>Pricing</p>
          </div>
          <div className="md:flex justify-end items-center gap-2">
            <button className="border border-[#6941C6] text-sm font-medium relative text-[#6941C6] px-4 py-1 rounded-md bg-[#E9D7FE]">
              <span>Login</span>
            </button>
            <button className="border text-sm font-medium relative text-white px-4 py-1 rounded-md bg-[#7F56D9]">
              <span>Sign up</span>
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
    );
};

export default Navbar;