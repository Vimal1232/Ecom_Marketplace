import { useState } from "react";
import { Logo, Ham, Close } from "../../public/assets/HomeImages";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const circleVariants = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  exit: { scale: 0 },
};

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <nav className="py-10 ">
      <div className="flex mx-auto  items-center justify-between px-20 max-sm:px-5 ">
        <div className="">
          <a href="#hero">
            <img src={Logo} alt="" className=" h-[30px] w-[30px]" />
          </a>
        </div>
        <div className=" pl-20 mx-auto overflow-y-hidden max-vmd:hidden ">
          <ul className="flex items-center gap-10 justify-center">
            <motion.li
              whileHover={{ y: -2 }}
              className=" font-Inter text-[14px] font-medium  "
            >
              <Link to="/">Home</Link>
            </motion.li>
            <motion.li
              whileHover={{ y: -2 }}
              className=" font-Inter text-[14px] font-medium"
            >
              <Link to="/shop">Shop</Link>
            </motion.li>
            <motion.li
              whileHover={{ y: -2 }}
              className=" font-Inter text-[14px] font-medium"
            >
              <Link to="/price">Pricing</Link>
            </motion.li>
            <motion.li
              whileHover={{ y: -2 }}
              className=" font-Inter text-[14px] font-medium"
            >
              <a href="#">About</a>
            </motion.li>
            <motion.li
              whileHover={{ y: -2 }}
              className=" font-Inter text-[14px] font-medium"
            >
              <a href="#">Contact</a>
            </motion.li>
          </ul>
        </div>
        <div>
          <button className=" bg-tertiary text-pure px-7 py-3 rounded-full font-Inter text-[14px] font-medium hover:bg-primary duration-700 ease-in-out max-vmd:hidden">
            Buy Template
          </button>
        </div>
        <div>
          <img
            src={isOpen ? Close : Ham}
            alt=""
            className="hidden max-vmd:flex w-[32px] h-[32px] cursor-pointer"
            onClick={() => setisOpen(!isOpen)}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 1 }}
          className={`${
            !isOpen ? "hidden" : "flex"
          } fixed w-full h-[100vh] top-0 left-0 bg-pure z-50 flex  vmd:hidden flex-col`}
        >
          <div className="flex items-center justify-between py-10 px-20 max-sm:px-5">
            <div className="">
              <img src={Logo} alt="" className=" h-[30px] w-[30px]" />
            </div>
            <div>
              <img
                src={isOpen ? Close : Ham}
                alt=""
                className="hidden max-vmd:flex w-[32px] h-[32px] cursor-pointer"
                onClick={() => setisOpen(!isOpen)}
              />
            </div>
          </div>
          <div>
            <ul className="flex flex-col gap-12 items-center ">
              <motion.li
                whileTap={{ scale: 1.5 }}
                className=" font-Inter text-[20px] font-bold  "
                onClick={() => setisOpen(!isOpen)}
              >
                <Link to="/">Home</Link>
              </motion.li>
              <motion.li
                whileTap={{ scale: 1.5 }}
                className=" font-Inter text-[20px] font-bold"
                onClick={() => setisOpen(!isOpen)}
              >
                <Link to="/shop">Shop</Link>
              </motion.li>
              <motion.li
                whileTap={{ scale: 1.5 }}
                className=" font-Inter text-[20px] font-bold"
                onClick={() => setisOpen(!isOpen)}
              >
                <Link to="/price">Pricing</Link>
              </motion.li>
              <motion.li
                whileTap={{ scale: 1.5 }}
                className=" font-Inter text-[20px] font-bold"
                onClick={() => setisOpen(!isOpen)}
              >
                <a href="#">About</a>
              </motion.li>
              <motion.li
                whileTap={{ scale: 1.5 }}
                className=" font-Inter text-[20px] font-bold"
                onClick={() => setisOpen(!isOpen)}
              >
                <a href="#">Contact</a>
              </motion.li>
            </ul>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};
export default Navbar;
